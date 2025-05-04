document.addEventListener("DOMContentLoaded", function () {
  const lyricsDisplay = document.getElementById("lyricsDisplay");
  const containerHeight =
    document.querySelector(".lyrics-container").offsetHeight;

  // Sample lyrics - replace with your actual lyrics
  const lyrics = [
    "This is the first line of the song",
    "This is the second line that's a bit longer",
    "Third line here",
    "Fourth line keeps the rhythm strong",
    "Fifth line shows the power of music",
    "Sixth line brings the melody home",
    "Seventh line builds the anticipation",
    "Eighth line delivers the resolution",
    "Ninth line takes us higher",
    "Tenth line brings us to the end",
  ];

  // Initialize lyrics display
  function initLyrics() {
    lyricsDisplay.innerHTML = "";
    lyrics.forEach((line, index) => {
      const lineElement = document.createElement("div");
      lineElement.className = "lyrics-line";
      lineElement.textContent = line;
      lyricsDisplay.appendChild(lineElement);
    });
  }

  // Scroll lyrics up line by line
  function scrollLyrics() {
    const lineHeight = 48; // Approximate height of each line (font-size + margin)
    let currentLine = 0;

    // Highlight first line initially
    highlightCurrentLine(currentLine);

    const scrollInterval = setInterval(() => {
      currentLine++;

      if (currentLine >= lyrics.length) {
        clearInterval(scrollInterval);
        return;
      }

      // Move the container up
      const newPosition = currentLine * lineHeight;
      lyricsDisplay.style.transform = `translateY(-${newPosition}px)`;

      // Highlight current line
      highlightCurrentLine(currentLine);
    }, 2000); // Change line every 2 seconds
  }

  // Highlight the current line
  function highlightCurrentLine(index) {
    const lines = document.querySelectorAll(".lyrics-line");
    lines.forEach((line, i) => {
      if (i === index) {
        line.classList.add("active");
      } else {
        line.classList.remove("active");
      }
    });
  }

  // Start the lyrics display
  initLyrics();
  scrollLyrics();
});
