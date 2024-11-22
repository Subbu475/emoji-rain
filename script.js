const emojiContainer = document.getElementById('emoji-container');
const emojis = ['😀', '😂', '😍', '😎', '🤩', '🥳', '😜', '😇', '🤯', '🤑'];
const emojiCount = 100;

function createEmoji() {
    const emojiElement = document.createElement('div');
    emojiElement.classList.add('emoji');
    emojiElement.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emojiElement.style.left = Math.random() * 100 + 'vw';
    emojiElement.style.animationDuration = Math.random() * 3 + 2 + 's';
    emojiElement.style.fontSize = Math.random() * 24 + 24 + 'px';
    emojiContainer.appendChild(emojiElement);

    emojiElement.addEventListener('animationend', () => {
        emojiElement.remove();
    });
}

for (let i = 0; i < emojiCount; i++) {
    setTimeout(createEmoji, i * 200);
}

setInterval(createEmoji, 200);
