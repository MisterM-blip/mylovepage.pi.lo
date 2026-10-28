
const galaxy = document.getElementById("galaxy");
const envelope = document.getElementById("envelope");
const scene = document.getElementById("envelopeScene");
const tapHint = document.getElementById("tapHint");
const letterCard = document.getElementById("letterCard");
const letterContent = document.getElementById("letterContent");
const flowerSection = document.getElementById("flowerSection");
const flowerButton = document.getElementById("flowerButton");
const flowerGarden = document.getElementById("flowerGarden");
const flowerArt = document.getElementById("flowerArt");
const flowerMessage = document.getElementById("flowerMessage");

// Create the galaxy stars
for (let i = 0; i < 65; i++) {
  const star = document.createElement("span");
  star.className = "star-particle";
  star.textContent = Math.random() > 0.5 ? "✦" : "·";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.setProperty(
    "--duration",
    (2 + Math.random() * 4) + "s"
  );
  star.style.animationDelay = Math.random() * 4 + "s";
  star.style.fontSize = (6 + Math.random() * 12) + "px";
  galaxy.appendChild(star);
}

// Your personal letter
const letter = `Dear baby,

I don't know what's happening to me these days but I'm trying to understand and recognize myself more, I'm sorry if you think that sometimes im in my own world or i look like I'm distancing or walang pakialam, i love you so much baby as we grow more harder in this relationship my love for you is somewhat I can't explain anymore... I love you more, more than you think i love you... Every single day I'm asking myself who am i now... How much do i deserve you... I feel so down of Myself i feel empty and idk if I'm giving enough maybe I'm thinking like that because I'm in the moment i am lost... But yun nga po baby i love you i wish i can hug you and cry on your arms rn... I try doing mediation yesterday and I'll try it tonight i hope this little changes and another new approach to myself will help me move forward... I love you asawa ko`;

// Open the envelope and reveal the letter
let opened = false;

envelope.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  scene.classList.add("opened");
  tapHint.textContent = "♥ A LETTER JUST FOR YOU ♥";
  envelope.setAttribute("aria-label", "Love letter opened");

  setTimeout(() => {
    letterCard.hidden = false;
    letterCard.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    typeLetter();
  }, 900);
});

// Reveal the letter a few characters at a time
function typeLetter() {
  let position = 0;
  const speed = 12;

  function writeNext() {
    const next = letter.slice(position, position + 4);
    letterContent.textContent += next;
    position += 4;

    if (position < letter.length) {
      setTimeout(writeNext, speed);
    } else {
      flowerSection.hidden = false;
      flowerSection.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
    }
  }

  writeNext();
}

// Grow the flower when she taps the button
flowerButton.addEventListener("click", () => {
  flowerGarden.classList.remove("bloomed");

  // Restart the flower animation
  void flowerGarden.offsetWidth;

  flowerArt.textContent = "🌹";
  flowerMessage.textContent =
    "If I could, I'd give you a flower for every reason " +
    "I love you. And I'd never run out. ❤️";

  flowerGarden.classList.add("bloomed");
  flowerButton.textContent = "♥ A FLOWER FOR MY ASAWA ♥";

  flowerGarden.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});
