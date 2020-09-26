(async () => {
  const video = document.querySelector("video");
  const canvas = document.querySelector("canvas");

  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      mandatory: {
        minAspectRatio: 1.777,
        maxAspectRatio: 1.778,
      },
      optional: [{ minWidth: 1920 }, { minHeigth: 1080 }],
    },
    audio: false,
  });
  video.srcObject = stream;

  document.getElementById("capture").addEventListener("click", (event) => {
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
  });

  const filters = ["", "grayscale", "sepia", "invert"];
  let currentFilter = 0;
  document.getElementById("filter").addEventListener("click", (event) => {
    currentFilter = (currentFilter + 1) % filters.length;
    canvas.className = filters[currentFilter];
  });
})();
