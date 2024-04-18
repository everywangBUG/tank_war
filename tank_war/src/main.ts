const el = document.getElementById("canvas")! as HTMLCanvasElement;
el.width = 300;
el.height = 300;
const ctx = el.getContext("2d");
if (ctx) {
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 300, 300);
  ctx.fillStyle = "blue";
  ctx.fillRect(150, 150, 100, 100);
}

// 画一个矩形线条
const el1 = document.getElementById("canvas1")! as HTMLCanvasElement;
el1.width = 200;
el1.height = 200;
const ctx1 = el1.getContext("2d");
if (ctx1) {
  ctx1.fillStyle = "red";
  ctx1.strokeRect(200, 200, 100, 100);
}

// 画一个圆形
const el2 = document.getElementById("canvas2")! as HTMLCanvasElement;
el2.width = 300;
el2.height = 300;
const ctx2 = el2.getContext("2d");
if (ctx2) {
  ctx2.fillStyle = "red";
  ctx2.beginPath();
  ctx2.arc(100, 100, 100, 0, 10 * Math.PI);
  ctx2.fill();
}

// 画一个三角形
const el3 = document.getElementById("canvas3")! as HTMLCanvasElement;
el3.width = 150;
el3.height = 150;
const ctx3 = el3.getContext("2d");
if (ctx3) {
  ctx3.beginPath();
  ctx3.moveTo(el3.width / 2, 10);
  ctx3.lineTo(el3.height -10, 150);
  ctx3.lineTo(10, 150);
  ctx3.strokeStyle = 'orange'
  ctx3.lineWidth = 10
  ctx3.closePath();
  ctx3.stroke()
}

// 画一个渐变矩形
const el4 = document.getElementById("canvas4")! as HTMLCanvasElement;
el4.width = 200;
el4.height = 200;
const ctx4 = el4.getContext("2d");
if (ctx4) {
  const gradient = ctx4.createLinearGradient(0, 0, 175, 175);
  gradient.addColorStop(0, "magenta");
  gradient.addColorStop(0.5, "blue");
  gradient.addColorStop(1, "red")
  
  ctx4.strokeStyle = gradient;
  ctx4.lineJoin = 'round';
  ctx4.lineWidth = 10;
  ctx4.strokeRect(50, 50, 100, 100)
}
