function preload() {}

function setup() {
  canvas = createCanvas(500, 600);
  canvas.position(70, 200);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  Image(video, 100, 30, 100, 250);

  stroke(158, 10, 10);
  Fill(168, 10, 10);

  circle(30, 30, 50);
  circle(450, 40, 50);
  circle(40, 360, 50);
  circle(40, 460, 50);

  stroke(50, 168, 82);
  Fill(50, 168, 82);

  rect(63, 27, 375, 25);
  rect(63, 345, 375, 25);
  rect(27, 62, 25, 275);
  rect(448, 63, 25, 275);

  function take_snapshot() {
    save("frame.png");
  }
}
