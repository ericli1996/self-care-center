// Query Selectors 👇
var receiveMsg = document.querySelector(".receive-msg");
var resultBox = document.querySelector(".result-box-content");
var affirmChecked = document.getElementById("affirmation");
var mantraChecked = document.getElementById("mantra");
var deleteBtn = document.querySelector(".delete-quote");
var currentMsg = document.querySelector("p");

// Message Arrays 👇
var affirmationList = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices.",
  "I like TURTLES"
];

var mantraList = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
];

// Event Listeners 👇
receiveMsg.addEventListener("click", getRandomMsg);
deleteBtn.addEventListener("click", deleteMsg);

// Event Handlers and Functions 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomMsg() {
  if (affirmChecked.checked) {
    resultBox.innerHTML = `<p class="center">${affirmationList[getRandomIndex(affirmationList)]}</p>`;
    deleteBtn.classList.remove("hidden");
  } else if (mantraChecked.checked) {
    resultBox.innerHTML = `<p class="center">${mantraList[getRandomIndex(mantraList)]}</p>`;
    deleteBtn.classList.remove("hidden");
  }
}

function deleteMsg() {
  getRandomMsg();
  if (affirmChecked.checked) {
    affirmationList.splice([currentMsg], 1);
  } else if (mantraChecked.checked) {
    mantraList.splice([currentMsg], 1);
  }
  alert("You won't see this message again.");
  // Note to instructors: I know we went over how the default JS alert is outdated/ugly.
  // Would a modal be used instead? I was thinking it would be nice if the notification
  // also faded out after while, without affecting any other functionality.
}
