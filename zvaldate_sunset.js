document.addEventListener("DOMContentLoaded", function() {
    
    const backDate = document.getElementById("back-date");

    

    if (backDate) {
        backDate.addEventListener("click", function() {
            window.location.href = "zvaldate_ideas.html"; // Go back to date ideas page
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
