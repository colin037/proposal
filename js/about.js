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

const thoughtElement = document.getElementById("thought");

const progressNumber = document.getElementById("progress-number");

const continueButton = document.getElementById("continue-button");


const thoughts = [

    "First of all nee ente type alla njan more into extrovert guys",

    "but still enike entho oru feeling towards you unde",

    "entho thantodoppam pinneyum samsarikan thonnunu",

    "enike ariyam neeyum confused aan enn ninta chattingil ninnu manasilavum",

    "nee oru introvert type aan",

    "enike ninne kurich athikam onnum ariyilla",

    "only things I know about you is nee MBBS padikkunu",

    "pinne ninta kurach daily routines",

    "nee comfortable aayavarod mathrame samsarikullu",

    "ninakku daivathil bayankara vishwasam aan",

    "pinne maybe vere kurach things koodi",

    "but except for that enike ninne kurich vere onnum ariyilla",

    "still I feel like I want to know you more"

];


let currentThought = 0;


function showThought() {

    thoughtElement.classList.remove("show");


    setTimeout(function () {

        thoughtElement.textContent = thoughts[currentThought];

        progressNumber.textContent =
            `${currentThought + 1} / ${(thoughts.length) + 1}`;

        thoughtElement.classList.add("show");

    }, 400);

}


continueButton.addEventListener("click", function () {

    if (currentThought < thoughts.length - 1) {

        currentThought++;

        showThought();

    } else {

        window.location.href = "message.html";

    }

});


showThought();