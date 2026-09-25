function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("live-clock").textContent = "Current Time: " + timeString;
}

setInterval(updateClock, 1000);
updateClock();

const graduationDate = new Date(2027, 7, 15, 9, 0, 0); // May 15, 2027, 9:00 AM

function updateCountdown() {
  const now = new Date();
  const diff = graduationDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "Congratulations, you graduated!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const pad = (num) => String(num).padStart(2, "0");

  document.getElementById("countdown").textContent =
    `${days} Days | ${pad(hours)} Hours | ${pad(minutes)} Minutes | ${pad(seconds)} Seconds`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const helloBtn = document.getElementById("hello-btn");
const helloMessage = document.getElementById("hello-message");

const funFacts = [
  "I like eating.",
  "I hate waffles.",
  "I am interested in Game Development.",
  "I enjoy coding challenges.",
  "Coffee and code go hand in hand for me."
];

helloBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  helloMessage.textContent = funFacts[randomIndex];
});

