document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("play-btn");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
    const nowPlayingSong = document.getElementById("now-playing-song");

    let isPlaying = false;

    playButton.addEventListener("click", function() {
        if (isPlaying) {
            playButton.innerHTML = "&#9654;";
            nowPlayingSong.innerText = "Paused";
        } else {
            playButton.innerHTML = "&#9208;"; // Pause icon
            nowPlayingSong.innerText = "Song Name";
        }
        isPlaying = !isPlaying;
    });

    prevButton.addEventListener("click", function() {
        nowPlayingSong.innerText = "Previous Song";
        playButton.innerHTML = "&#9208;";
        isPlaying = true;
    });

    nextButton.addEventListener("click", function() {
        nowPlayingSong.innerText = "Next Song";
        playButton.innerHTML = "&#9208;";
        isPlaying = true;
    });
});
