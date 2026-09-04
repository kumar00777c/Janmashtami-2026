// ===============================
//      JANMASHTAMI WEBSITE
//          JAVASCRIPT
// ===============================

const music = document.getElementById("krishnaMusic");

// Start Krishna flute music when the wish page loads
if (music) {

    music.volume = 0.35;

    music.play().catch(() => {
        console.log("Music will start after user interaction.");
    });

}