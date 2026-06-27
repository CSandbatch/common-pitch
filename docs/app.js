(() => {
  const cards = [...document.querySelectorAll("[data-card-id]")];
  const cardById = new Map(cards.map((card) => [card.dataset.cardId, card]));
  const hand = new Set();

  const handDialog = document.querySelector("[data-hand-dialog]");
  const presenterDialog = document.querySelector("[data-presenter-dialog]");
  const handList = document.querySelector("[data-hand-list]");
  const handEmpty = document.querySelector("[data-hand-empty]");
  const handDock = document.querySelector("[data-hand-dock]");
  const presentButton = document.querySelector("[data-present]");
  const presenterStage = document.querySelector("[data-presenter-stage]");
  const slideProgress = document.querySelector("[data-slide-progress]");
  const statusMessage = document.querySelector("[data-status-message]");

  let statusTimer;
  let activeSlide = 0;
  let presenterCards = [];

  const cleanText = (value) => value.replace(/\s+/g, " ").trim();

  const cardData = (card) => {
    const front = card.querySelector(".card-front");
    const source = front.querySelector(".card-meta span:last-child");
    const claim = front.querySelector(".card-body > p:last-child");

    return {
      id: card.dataset.cardId,
      title: card.dataset.cardTitle,
      type: card.dataset.cardType,
      source: source ? cleanText(source.textContent) : "Source state unavailable",
      claim: claim ? cleanText(claim.textContent) : "",
    };
  };

  const announce = (message) => {
    window.clearTimeout(statusTimer);
    statusMessage.textContent = message;
    statusMessage.classList.add("is-visible");
    statusTimer = window.setTimeout(() => {
      statusMessage.classList.remove("is-visible");
    }, 2400);
  };

  const updateSelectionUI = () => {
    cards.forEach((card) => {
      const selected = hand.has(card.dataset.cardId);
      card.classList.toggle("is-selected", selected);
      card.querySelectorAll("[data-collect]").forEach((button) => {
        button.setAttribute("aria-pressed", String(selected));
        button.textContent = selected ? "Remove from hand" : "Add to hand";
      });
    });

    const count = hand.size;
    const displayCount = String(count).padStart(2, "0");

    document.querySelectorAll("[data-hand-count]").forEach((node) => {
      node.textContent = displayCount;
      node.setAttribute(
        "aria-label",
        `${count} ${count === 1 ? "card" : "cards"} selected`
      );
    });

    document.querySelectorAll("[data-dock-count]").forEach((node) => {
      node.textContent = String(count);
    });

    handDock.hidden = count === 0;
    presentButton.disabled = count === 0;
    renderHand();
  };

  const renderHand = () => {
    handList.replaceChildren();
    handEmpty.hidden = hand.size > 0;

    [...hand].forEach((id) => {
      const card = cardById.get(id);
      if (!card) return;

      const data = cardData(card);
      const item = document.createElement("li");
      const title = document.createElement("strong");
      const description = document.createElement("span");
      const remove = document.createElement("button");

      title.textContent = data.title;
      description.textContent = `${data.type} / ${data.source}`;
      remove.type = "button";
      remove.textContent = "Remove";
      remove.dataset.removeCard = id;
      remove.setAttribute("aria-label", `Remove ${data.title} from your hand`);

      item.append(title, description, remove);
      handList.append(item);
    });
  };

  const toggleCard = (id, shouldAnnounce = true) => {
    if (!cardById.has(id)) return;

    if (hand.has(id)) {
      hand.delete(id);
      if (shouldAnnounce) announce(`${cardById.get(id).dataset.cardTitle} removed`);
    } else {
      hand.add(id);
      if (shouldAnnounce) announce(`${cardById.get(id).dataset.cardTitle} added`);
    }

    updateSelectionUI();
  };

  const turnCard = (button) => {
    const card = button.closest("[data-card-id]");
    const front = card.querySelector(".card-front");
    const back = card.querySelector(".card-back");
    const showBack = !front.hidden;

    front.hidden = showBack;
    back.hidden = !showBack;
    card.classList.toggle("is-flipped", showBack);

    card.querySelectorAll("[data-flip]").forEach((control) => {
      control.setAttribute("aria-expanded", String(showBack));
    });

    const destination = showBack ? back : front;
    destination.querySelector("[data-flip]").focus();
  };

  const openHand = () => {
    renderHand();
    handDialog.showModal();
  };

  const buildShareUrl = () => {
    const url = new URL(window.location.href);
    url.hash = "";
    url.search = "";

    if (hand.size > 0) {
      url.searchParams.set("hand", [...hand].join(","));
    }

    return url.toString();
  };

  const copyText = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.append(field);
    field.select();
    document.execCommand("copy");
    field.remove();
  };

  const renderSlide = () => {
    const card = presenterCards[activeSlide];
    if (!card) return;

    const data = cardData(card);
    const slide = document.createElement("article");
    const type = document.createElement("p");
    const title = document.createElement("h2");
    const source = document.createElement("p");

    slide.className = "presenter-slide";
    type.className = "slide-type";
    source.className = "slide-source";

    type.textContent = data.type;
    title.textContent = data.title;
    source.textContent = `${data.source} / ${data.claim}`;

    slide.append(type, title, source);
    presenterStage.replaceChildren(slide);
    slideProgress.textContent = `${String(activeSlide + 1).padStart(2, "0")} / ${String(
      presenterCards.length
    ).padStart(2, "0")}`;
  };

  const openPresenter = () => {
    presenterCards = [...hand]
      .map((id) => cardById.get(id))
      .filter(Boolean);

    if (presenterCards.length === 0) {
      announce("Add at least one card before presenting");
      return;
    }

    activeSlide = 0;
    renderSlide();
    handDialog.close();
    presenterDialog.showModal();
  };

  const moveSlide = (direction) => {
    if (presenterCards.length === 0) return;
    activeSlide =
      (activeSlide + direction + presenterCards.length) % presenterCards.length;
    renderSlide();
  };

  const drawCard = () => {
    const card = cards[Math.floor(Math.random() * cards.length)];
    if (!card) return;

    cards.forEach((item) => item.classList.remove("is-drawn"));
    card.classList.add("is-drawn");
    card.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    window.setTimeout(() => {
      card.querySelector("[data-flip]").focus({ preventScroll: true });
    }, 450);
    announce(`Drawn: ${card.dataset.cardTitle}`);
  };

  const restoreHandFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const selected = params.get("hand");
    if (!selected) return;

    selected.split(",").forEach((id) => {
      if (cardById.has(id)) hand.add(id);
    });
  };

  document.addEventListener("click", async (event) => {
    const target = event.target.closest("button");
    if (!target) return;

    if (target.matches("[data-flip]")) {
      turnCard(target);
      return;
    }

    if (target.matches("[data-collect]")) {
      toggleCard(target.closest("[data-card-id]").dataset.cardId);
      return;
    }

    if (target.matches("[data-add-card]")) {
      const id = target.dataset.addCard;
      if (!hand.has(id)) toggleCard(id);
      return;
    }

    if (target.matches("[data-remove-card]")) {
      toggleCard(target.dataset.removeCard);
      return;
    }

    if (target.matches("[data-open-hand]")) {
      openHand();
      return;
    }

    if (target.matches("[data-clear-hand]")) {
      hand.clear();
      updateSelectionUI();
      announce("Hand cleared");
      return;
    }

    if (target.matches("[data-share]")) {
      try {
        await copyText(buildShareUrl());
        announce("Share link copied");
      } catch {
        announce("Could not copy the link");
      }
      return;
    }

    if (target.matches("[data-present]")) {
      openPresenter();
      return;
    }

    if (target.matches("[data-exit-presenter]")) {
      presenterDialog.close();
      return;
    }

    if (target.matches("[data-previous-slide]")) {
      moveSlide(-1);
      return;
    }

    if (target.matches("[data-next-slide]")) {
      moveSlide(1);
      return;
    }

    if (target.matches("[data-draw-card]")) {
      drawCard();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!presenterDialog.open) return;

    if (event.key === "ArrowRight" || event.key === "PageDown") {
      event.preventDefault();
      moveSlide(1);
    }

    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      moveSlide(-1);
    }
  });

  restoreHandFromUrl();
  updateSelectionUI();
})();
