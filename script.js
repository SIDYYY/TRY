const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const finalMessage = document.getElementById("finalMessage");
const hesitatePopup = document.getElementById("hesitatePopup");
const formContent = document.getElementById("formContent");

// floating flowers at page load
function createFallingFlowers() {
  const container = document.getElementById("flowerContainer");
  for (let i = 0; i < 20; i++) {
    const flower = document.createElement("div");
    flower.classList.add("falling-flower");
    flower.innerHTML = "🌸"; // replace with your preferred flower icon
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.fontSize = 12 + Math.random() * 25 + "px";
    const duration = 8 + Math.random() * 7;
    flower.style.animationDuration = duration + "s";
    flower.style.animationDelay = Math.random() * 5 + "s";
    container.appendChild(flower);
  }
}
createFallingFlowers();

// prevent NO click
noBtn.addEventListener("click", e => e.preventDefault());

// hesitate popup always visible
hesitatePopup.classList.add("show");

// typing effect function
function typeMessage(element, text, speed = 25) {
  element.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    element.innerHTML += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

// YES button
yesBtn.addEventListener("click", () => {
  formContent.style.display = "none";
  hesitatePopup.classList.remove("show");
  

  // Final message text
const message = `
Yay! You said YES, Bob!

I’m so happy right now — you’ve made my day so special.
I’ll always be here to listen to your random chikas and chessmes,
and share little moments with you.

I can’t wait for all our fun adventures together — 
cinema trips, food dates, and all the little adventures that make us laugh. 
Thank you for trusting me and being amazing — this is just the beginning of our story!
`;


  // Add placeholder image
  finalMessage.innerHTML = `
    <div style="text-align:center; margin-bottom:20px;">
      <img src="NAILONGG.jpg" alt="Our favorite cartoon" style="border-radius:15px; max-width:80%;">
    </div>
    <div id="typedText" style="white-space:pre-wrap;"></div>
  `;

  // start typing
  const typedDiv = document.getElementById("typedText");
  typeMessage(typedDiv, message, 25);


 fetch("YOUR_WEB_APP_URL_HERE", {
    method: "POST",
    body: JSON.stringify({ name: "Bob", answer: "yes" }),
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
});
