// Sample lyrics
const lyricsText = `
This is the first line
Here comes the second
Now we float into the third
Feel the rhythm, feel the word

Keep it going, don't stop now
We're flying high, we'll show you how
Just like credits on the screen
These are lyrics in a dream
`;

const lyricsElement = document.getElementById("lyrics");
lyricsElement.innerText = lyricsText;

// Adjust animation duration based on line count
const lineCount = lyricsText.split("\n").length;
const durationPerLine = 2; // seconds per line
lyricsElement.style.animationDuration = `${lineCount * durationPerLine}s`;
