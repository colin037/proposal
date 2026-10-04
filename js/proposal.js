const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const proposalQuestion = document.getElementById("proposal-question");

const originalQuestion = "Will you be my girlfriend? ❤️";

function sendResponse(answer) {
  emailjs
    .send("service_s7zu14n", "template_xea3wqh", {
      answer: answer,
      time: new Date().toLocaleString(),
    })
    .then(function (response) {
      console.log("Response email sent successfully!", response.status);
    })
    .catch(function (error) {
      console.error("Response email failed:", error);
    });
}

const noSteps = [
  {
    question: "Are you sure you want to say no?",
    yes: "Yes, I'm sure",
    no: "No, let me think",
  },
  {
    question: "Have you really made up your mind?",
    yes: "Yes, I have",
    no: "No, I'm still thinking",
  },
  {
    question: "Do you really want this to be a no?",
    yes: "Yes, I want to say no",
    no: "No, not yet",
  },
  {
    question: "Are you certain you don't want to give us a chance?",
    yes: "Yes, I'm certain",
    no: "No, maybe",
  },
  {
    question: "Have you thought about what you're saying?",
    yes: "Yes, I have",
    no: "No, let me think",
  },
  {
    question: "Is this really how you want this story to end?",
    yes: "Yes, I'm sure",
    no: "No, wait",
  },
  {
    question: "Do you still want to turn me down?",
    yes: "Yes, I do",
    no: "No, I've changed my mind",
  },
  {
    question: "One last time... are you sure?",
    yes: "Yes, I'm sure",
    no: "No",
  },
];

let currentStep = -1;

// Change the question with a small fade
function changeQuestion(text) {
  proposalQuestion.classList.remove("show-question");

  setTimeout(function () {
    proposalQuestion.textContent = text;

    proposalQuestion.classList.add("show-question");
  }, 300);
}

// Change the button text
function changeButtons(yesText, noText) {
  yesButton.textContent = yesText;
  noButton.textContent = noText;
}

// Return to the original proposal
function returnToProposal() {
  currentStep = -1;

  changeQuestion(originalQuestion);

  changeButtons("Yes ❤️", "No");
}

// Initial YES
yesButton.addEventListener("click", function () {
  if (currentStep === -1) {
    sendResponse("YES ❤️");

    changeQuestion("You said yes ❤️");

    yesButton.style.display = "none";
    noButton.style.display = "none";

    return;
  }

  // Confirming the rejection
  if (currentStep >= 0) {
    if (currentStep < noSteps.length - 1) {
      currentStep++;

      const step = noSteps[currentStep];

      changeQuestion(step.question);

      changeButtons(step.yes, step.no);
    } else {
      sendResponse("Let's just be friends ❤️");

      changeQuestion("Then let's just be friends ❤️");

      yesButton.style.display = "none";
      noButton.style.display = "none";
    }
  }
});

// Initial NO
noButton.addEventListener("click", function () {
  if (currentStep === -1) {
    currentStep = 0;

    const step = noSteps[currentStep];

    changeQuestion(step.question);

    changeButtons(step.yes, step.no);

    return;
  }

  // If she chooses the "No, I'm still thinking" option
  if (currentStep >= 0) {
    returnToProposal();
  }
});
