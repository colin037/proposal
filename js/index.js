const beginButton = document.getElementById("begin-button");



// Begin button
beginButton.addEventListener("click", function () {

    // Detect device type
    const device = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
        ? "Mobile"
        : "Desktop";

    // Detect operating system
    let os = "Unknown";

    if (/Windows/i.test(navigator.userAgent)) {
        os = "Windows";
    } else if (/Android/i.test(navigator.userAgent)) {
        os = "Android";
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        os = "iOS";
    } else if (/Mac OS X/i.test(navigator.userAgent)) {
        os = "macOS";
    } else if (/Linux/i.test(navigator.userAgent)) {
        os = "Linux";
    }

    // Detect browser
    let browser = "Unknown";

    if (/Edg/i.test(navigator.userAgent)) {
        browser = "Microsoft Edge";
    } else if (/OPR|Opera/i.test(navigator.userAgent)) {
        browser = "Opera";
    } else if (/Chrome/i.test(navigator.userAgent)) {
        browser = "Google Chrome";
    } else if (/Firefox/i.test(navigator.userAgent)) {
        browser = "Mozilla Firefox";
    } else if (/Safari/i.test(navigator.userAgent)) {
        browser = "Safari";
    }

    // Send notification email
    emailjs.send(
        "service_s7zu14n",
        "template_xea3wqh",
        {
            answer: "She clicked Begin ❤️",
            device: device,
            os: os,
            browser: browser,
            time: new Date().toLocaleString()
        }
    )
    .then(function (response) {
        console.log("Begin notification sent!", response.status);
    })
    .catch(function (error) {
        console.error("Begin notification failed:", error);
    });


    // Start page transition
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
