const lyricsElement = document.getElementById("lyrics");
const audio = document.getElementById("audio");
const progressBar = document.getElementById("progress");

const lyrics = [
  { time: 0.0, text: "Feels like a close, it's coming to", type: "eminem" },
  { time: 3.38, text: "Fuck am I gonna do?", type: "eminem" },
  { time: 6.77, text: "It's too late to start over", type: "eminem" },
  {
    time: 10.15,
    text: "This is the only thing I, thing I know",
    type: "eminem",
  },
  {
    time: 13.54,
    text: "Sometimes I feel like all I ever do is",
    type: "eminem",
  },
  {
    time: 16.92,
    text: "Find different ways to word the same, old song",
    type: "eminem",
  },
  { time: 20.3, text: "Ever since I came along", type: "eminem" },
  {
    time: 23.69,
    text: 'From the day the song called "Hi, My Name Is" dropped',
    type: "eminem",
  },
  { time: 27.07, text: "Started thinkin' my name was Fault", type: "eminem" },
  { time: 30.46, text: "'Cause any time things went wrong", type: "eminem" },
  // ... continues up to ~345s
];

// Inject lyrics into scrolling div
lyrics.forEach((line) => {
  const div = document.createElement("div");
  div.className = line.type; // class name for new div
  div.textContent = line.text; //line by line lyrics
  lyricsElement.appendChild(div);
});

// Set scroll animation speed
const duration = lyrics.length * 2.5; // seconds
lyricsElement.style.animationDuration = `${duration}s`;

// Sync progress bar with audio
audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = percent + "%";
});

// Highlight line near the middle
const lyricBox = document.querySelector(".lyric-box"); //lyrics container

function highlightCurrentLine() {
  const lines = document.querySelectorAll("#lyrics div");
  const boxCenter =
    lyricBox.getBoundingClientRect().top + lyricBox.offsetHeight / 2;

  lines.forEach((line) => {
    const rect = line.getBoundingClientRect();
    const lineCenter = rect.top + rect.height / 2;
    const distance = Math.abs(boxCenter - lineCenter);

    if (distance < 20) {
      line.classList.add("highlight");
    } else {
      line.classList.remove("highlight");
    }
  });

  requestAnimationFrame(highlightCurrentLine);
}

requestAnimationFrame(highlightCurrentLine);
