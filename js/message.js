const backgroundMusic = new Audio("assets/music/Aaradhike.mp3");

backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

backgroundMusic.play()
    .then(function () {
        console.log("Page 2 music started automatically");
    })
    .catch(function () {
        console.log("Page 2 autoplay blocked - waiting for interaction");
    });

document.addEventListener("click", function () {

    backgroundMusic.play()
        .then(function () {
            console.log("Page 2 music started after interaction");
        })
        .catch(function (error) {
            console.error("Page 2 music failed:", error);
        });

}, { once: true });

const messageLines = document.querySelectorAll(".message-line");

const scrollIndicator = document.querySelector(".scroll-indicator");

const messageNext = document.getElementById("message-next");


// Convert every line into individual characters
messageLines.forEach(function (line) {

    const text = line.textContent;

    line.textContent = "";

    for (let i = 0; i < text.length; i++) {

        const character = document.createElement("span");

        character.textContent = text[i];

        character.classList.add("character");

        line.appendChild(character);
    }

});


// Get all characters
const characters = document.querySelectorAll(".character");


// Reveal characters based on scroll position
function revealCharacters() {

    const scrollTop = window.scrollY;

    const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

    const scrollProgress = scrollTop / maxScroll;


    const revealCount =
        Math.floor(scrollProgress * characters.length);


    characters.forEach(function (character, index) {

        if (index < revealCount) {

            character.classList.add("visible");

        } else {

            character.classList.remove("visible");

        }

    });


    // Show Continue button near the end
    if (scrollProgress >= 0.95) {

        messageNext.classList.add("show");

    } else {

        messageNext.classList.remove("show");

    }


    // Hide scroll indicator after scrolling
    if (scrollTop > 100) {

        scrollIndicator.classList.add("hidden");

    } else {

        scrollIndicator.classList.remove("hidden");

    }

}


window.addEventListener("scroll", revealCharacters);


// Run once when the page loads
revealCharacters();

messageNext.addEventListener("click", function () {
    window.location.href = "proposal.html";
});
