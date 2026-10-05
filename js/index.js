const beginButton = document.getElementById("begin-button");



// Begin button
beginButton.addEventListener("click", function () {

    emailjs.send(
        "service_s7zu14n",
        "template_xea3wqh",
        {
            answer: "She clicked Begin ❤️",
            time: new Date().toLocaleString()
        }
    )
    .then(function (response) {
        console.log("Begin notification sent!", response.status);
    })
    .catch(function (error) {
        console.error("Begin notification failed:", error);
    });


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
