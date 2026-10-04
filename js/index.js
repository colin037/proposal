const beginButton = document.getElementById("begin-button");



// Begin button
beginButton.addEventListener("click", function () {

    const openingPage = document.querySelector(".opening-page");

    openingPage.classList.add("fade-out");

    setTimeout(function () {
        window.location.href = "about.html";
    }, 1500);

});

const particleContainer = document.querySelector(".particles");

for (let i = 0; i < 40; i++) {
  const particle = document.createElement("div");

  particle.classList.add("particle");

  particle.style.left = Math.random() * 100 + "%";

  particle.style.top = Math.random() * 100 + "%";

  particle.style.animationDuration = 5 + Math.random() * 8 + "s";

  particle.style.animationDelay = Math.random() * 8 + "s";

  particleContainer.appendChild(particle);
}
