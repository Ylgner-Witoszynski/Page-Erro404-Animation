window.addEventListener("load", () => {
  const video = document.createElement("video");
  const divVideo = document.querySelector(".divVideo");
  const fallbackImg = document.querySelector(".divVideo img");

  video.src = "img/monstro.mp4";
  video.autoplay = true;
  video.muted = true;
  video.playsInline = true;
  video.loop = true;

  video.style.opacity = 0

  video.addEventListener("canplaythrough", ()=> {
    video.style.opacity = 1
    fallbackImg.style.display = "none";
  });

  divVideo.appendChild(video);
});
