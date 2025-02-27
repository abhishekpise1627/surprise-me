const surpriseBtn = document.getElementById('surpriseBtn');
const message = document.getElementById('message');
const soundEffect = document.getElementById('soundEffect');

const messages = [
  "🎉 Surprise! You've unlocked something special! 🎉",
  "💥 Wow! You've got it! 💥",
  "🎊 Congratulations! You're amazing! 🎊",
  "👏 Well done! You're a rockstar! 👏",
  "✨ Awesome! You've just earned a surprise! ✨",
  "🌟 Keep it up! Here's your reward! 🌟",
  "🔥 You're on fire! Here's your prize! 🔥",
  "🎁 Gift unlocked! Keep going! 🎁",
  "🛎️ Ding Ding! You've won a surprise! 🛎️"
];

const colors = [
  { bg: "#FF6347", messageColor: "#FFEB3B", bodyColor: "#ff6ec4" },
  { bg: "#FF8C00", messageColor: "#FFDF00", bodyColor: "#7873f5" },
  { bg: "#8BC34A", messageColor: "#FFEB3B", bodyColor: "#48c6ef" },
  { bg: "#2196F3", messageColor: "#FFFF00", bodyColor: "#9C27B0" },
  { bg: "#9C27B0", messageColor: "#FF9800", bodyColor: "#E91E63" },
  { bg: "#E91E63", messageColor: "#F5F5F5", bodyColor: "#FF5722" },
  { bg: "#03A9F4", messageColor: "#FF9800", bodyColor: "#4CAF50" },
  { bg: "#4CAF50", messageColor: "#F1F1F1", bodyColor: "#FF6347" },
  { bg: "#FF5722", messageColor: "#FFEB3B", bodyColor: "#2196F3" }
];

surpriseBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const selectedMessage = messages[randomIndex];
  const selectedColor = colors[randomIndex];

  message.style.display = 'block';
  message.textContent = selectedMessage;
  message.style.color = selectedColor.messageColor;

  surpriseBtn.style.background = selectedColor.bg;
  surpriseBtn.style.boxShadow = `0 6px 30px rgba(${hexToRgb(selectedColor.bg)}, 0.5)`;

  document.body.style.background = selectedColor.bodyColor;

  soundEffect.play();

  surpriseBtn.style.transform = 'scale(1.1)';
  setTimeout(() => {
    surpriseBtn.style.transform = 'scale(1)';
  }, 300);

  message.classList.add('bounce');
});

function hexToRgb(hex) {
  const result = /^#([0-9a-f]{6})$/i.exec(hex);
  return result ? result[1].match(/.{2}/g).map(x => parseInt(x, 16)).join(",") : null;
}
