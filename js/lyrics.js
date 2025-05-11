const lyricsElement = document.getElementById("lyrics");
const audio = document.getElementById("audio");
const progressBar = document.getElementById("progress");
const lyricBox = document.querySelector(".lyric-box");

let lyrics = [];
const lineHeight = 40;

async function fetchLyrics() {
  try {
    const response = await fetch('../assets/lyrics.json');
    lyrics = await response.json();
    injectLyrics();
  } catch (error) {
    console.error('Error fetching lyrics:', error);
  }
}

function injectLyrics() {
  lyrics.forEach((line) => {
    const div = document.createElement("div");
    div.className = line.type;         // "eminem" or "sia"
    div.textContent = line.text;
    lyricsElement.appendChild(div);
  });

  const duration = lyrics.length * 2.5; // just for scroll animation if used
  lyricsElement.style.animationDuration = `${duration}s`;
}

// Sync lyrics scrolling and highlight with audio
audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;

  let currentIndex = lyrics.findIndex((line, i) => {
    const next = lyrics[i + 1];
    return currentTime >= line.time && (!next || currentTime < next.time);
  });

  if (currentIndex === -1) currentIndex = lyrics.length - 1;

  const scrollY = lineHeight * currentIndex - lyricBox.clientHeight / 2 + lineHeight / 2;
  lyricsElement.style.top = `-${scrollY}px`;

  // Highlight the active line
  document.querySelectorAll('#lyrics div').forEach((div, i) => {
    div.classList.toggle("highlight", i === currentIndex);
  });

  // Update progress bar
  const percent = (currentTime / audio.duration) * 100;
  progressBar.style.width = percent + "%";
});

// Start everything
fetchLyrics();
