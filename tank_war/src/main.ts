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

// 在canvas上面绘制图片
const el5 = document.getElementById("canvas5")! as HTMLCanvasElement;
el5.width = 300;
el5.height = 300;
const ctx5 = el5.getContext("2d");
const img = new Image()
img.src = '../src/assets/cat.jpg';
img.onload = () => {
  if (ctx5) {
    const pattern = ctx5.createPattern(img, 'repeat')!;
    ctx5.fillStyle = pattern;
    ctx5.fillRect(0, 0, 300, 300);
  }
}

// 在canvas放图片，根据canvas的宽高进行缩放
const el6 = document.getElementById("canvas6")! as HTMLCanvasElement;
const ctx6 = el6.getContext("2d");
ctx6?.fillRect(0, 0, el6.width, el6.height)
const img1 = new Image()
img1.src = '../src/assets/cat.jpg';
img1.onload = () => {
  if (ctx6) {
    el6.width = img1.naturalWidth * scale(img1, el6);
    el6.height = img1.naturalHeight * scale(img1, el6);
    ctx6.drawImage(img1, 0, 0, el6.width, el6.height)
  }
}

const scale = (img: HTMLImageElement, el: HTMLCanvasElement) => {
  return Math.min(el.width /  img.naturalWidth, el.height / img.naturalHeight)
}

// 绘制随机色块
const el7 = document.getElementById("canvas7")! as HTMLCanvasElement;
const ctx7 = el7.getContext("2d");
if (ctx7) {
  ctx7.fillStyle = '#000'
  ctx7.fillRect(0, 0, el7.width, el7.height)
}
for (let i = 0; i <= 1000; i++) {
  if (ctx7) {
    ctx7.fillStyle = 'white'
    ctx7.fillRect(Math.random()*el.width, Math.random()*el.height, 1, 1)
  }
}

// 随机色块
const el8 = document.getElementById("canvas8")! as HTMLCanvasElement;
const ctx8 = el8.getContext("2d");
const colors = ['#00ff', '#ff0000', '#00ff00', '#ffff00', '#00ffff', '#ff00ff', '#887EA0', '#2E5378', '#EB943A', '#CA3C75']
for (let i = 0; i <= 60; i++) {
  if (ctx8) {
    ctx8.beginPath()
    const color = colors[Math.floor(Math.random() * colors.length)]
    ctx8.fillStyle = color
    ctx8.arc(Math.random()*el.width, Math.random()*el.height, Math.random() * 10 + 2, 0, 2 * Math.PI)
    ctx8.fill() 
  }
}

// 绘制文字
const el9 = document.getElementById("canvas9")! as HTMLCanvasElement;
const ctx9 = el9.getContext("2d");
if (ctx9) {
  ctx9.fillStyle = '#000'
  ctx9.fillRect(0, 0, el9.width, el9.height)
  ctx9.font = 'bold 50px Arial'
  ctx9.fillStyle = 'orange'
  ctx9.fillText('Tank War', 10, 100)
}