document.addEventListener("DOMContentLoaded", function() {
    const dateBtn = document.getElementById("date-btn");
    const backBtn = document.getElementById("back-btn");

    if (dateBtn) {
        dateBtn.addEventListener("click", function() {
            window.location.href = "date.html"; // Open the Date Ideas page
        });
    }

    if (backBtn) {
        backBtn.addEventListener("click", function() {
            window.location.href = "index.html"; // Go back to the main page
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bg-music");
    const musicToggle = document.getElementById("music-toggle");

    // Fix autoplay issue
    document.body.addEventListener("click", function () {
        if (music.paused) {
            music.play().catch(error => console.log("Auto-play blocked:", error));
        }
    }, { once: true });

    // Toggle Play/Pause
    if (musicToggle) {
        musicToggle.addEventListener("click", function () {
            if (music.paused) {
                music.play();
                musicToggle.textContent = "Pause Music";
            } else {
                music.pause();
                musicToggle.textContent = "Play Music";
            }
        });
    }
});
