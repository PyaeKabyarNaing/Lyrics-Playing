const lyricsElement = document.getElementById("lyrics");

const lyrics = [
  { text: "Feels like a close, it's coming to", type: "eminem" },
  { text: "Fuck am I gonna do?", type: "eminem" },
  { text: "It's too late to start over", type: "sia" },
  { text: "This is the only thing I, thing I know", type: "sia" },
  { text: "I know what it was like, I was there once", type: "eminem" },
  { text: "Single parent, strugglin' to find your place", type: "eminem" },
  { text: "You wanna run away from home, but you can't", type: "eminem" },
  { text: "Goin' through growing pains", type: "eminem" },
  { text: "But you're gonna make it through, it's okay", type: "sia" },
  { text: "Guts over fear", type: "sia" },
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
