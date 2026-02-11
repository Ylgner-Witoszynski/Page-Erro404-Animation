window.addEventListener("load", () => {
    const video = document.createElement("video");
    const divVideo = document.querySelector(".divVideo");


    video.src = "img/Flow.mp4";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    video.style.opacity = 0;

    video.addEventListener("canplaythrough", () => {
        video.style.opacity = 1;
    })

    divVideo.appendChild(video);
});

