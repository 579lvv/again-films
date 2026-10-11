"use strict";
const films = [...document.querySelectorAll("video")];
films.forEach((video) => {
  video.addEventListener("play", () => {
    films.forEach((other) => { if (other !== video) other.pause(); });
    video.closest(".film").querySelector(".playback-error").hidden = true;
  });
  video.addEventListener("error", () => {
    video.closest(".film").querySelector(".playback-error").hidden = false;
  });
});
