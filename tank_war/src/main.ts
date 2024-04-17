const el = document.getElementById("canvas")! as HTMLCanvasElement;
el.width = 600;
el.height = 600;
const ctx = el.getContext("2d");
if (ctx) {
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 300, 300);
  ctx.fillStyle = "blue";
  ctx.fillRect(150, 150, 100, 100);
}

// 画一个线条
const el1 = document.getElementById("canvas1")! as HTMLCanvasElement;
el1.width = 600;
el1.height = 600;
const ctx1 = el1.getContext("2d");
if (ctx1) {
  ctx1.fillStyle = "red";
  ctx1.strokeRect(200, 200, 100, 100);
}

// 画一个圆形
const el2 = document.getElementById("canvas2")! as HTMLCanvasElement;
el2.width = 600;
el2.height = 600;
const ctx2 = el2.getContext("2d");
if (ctx2) {
  ctx2.fillStyle = "red";
  ctx2.beginPath();
  ctx2.arc(100, 100, 100, 0, 10 * Math.PI);
  ctx2.fill();
}

