const siteFrame = document.querySelector(".site-frame");

function flipCard(card) {
    const wasFlipped = card.classList.contains("is-flipped");

    document.querySelectorAll(".lesson").forEach(function(item) {
        item.classList.remove("is-flipped");
    });

    if (!wasFlipped) {
        card.classList.add("is-flipped");
    }
}

function cardKey(event, card) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        flipCard(card);
    }
}

function toggleMenu() {
    document.getElementById("navigation").classList.toggle("menu-open");
}

function toggleTheme() {
    siteFrame.classList.toggle("dark-theme");
    const button = document.querySelector(".theme-button");

    if (siteFrame.classList.contains("dark-theme")) {
        button.textContent = "☀️ Light mode";
    } else {
        button.textContent = "🌙 Dark mode";
    }
}
