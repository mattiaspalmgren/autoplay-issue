import RxPlayer from "rx-player";

const videoElement = document.querySelector("video");

RxPlayer.LogLevel = 'DEBUG';
const player = new RxPlayer({
  videoElement
});

player.loadVideo({
  url: "https://svt-live-a.secure.footprint.net/se/svt2/master.m3u8?defaultSubLang=1",
  transport: "directfile",
  autoPlay: true
});
