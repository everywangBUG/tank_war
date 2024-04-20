import './global.css'
class BlackBoard {
    constructor(
      public el =  document.getElementById("dashboard") as HTMLCanvasElement,
      private ctx = el.getContext("2d")!,
      private width : number = el.width,
      private height: number = el.height,
    ) {
      this.init()
      this.bindEvent()
    }
    
    private init() {
      this.ctx.fillStyle = "black"
      this.ctx?.fillRect(0, 0, this.width, this.height)
    }

    private bindEvent() {
      // 鼠标移动
      const callback = this.drawLine.bind(this)
      this.el.addEventListener("mousedown", () => {
        // 绘制
          this.ctx.beginPath()
          this.ctx.strokeStyle = "white"
          this.el.addEventListener('mousemove', callback)
          // 鼠标松开结束划线
          // 使用document，防止事件冒泡在canvas外部松开不能移除事件
          document.addEventListener('mouseup', () => {
            this.el.removeEventListener('mousemove', callback)
          })
      })
    }
    
    private drawLine(e: MouseEvent) {
      this.ctx.lineTo(e.offsetX, e.offsetY)
      this.ctx.stroke()
    }
}

const instance = new BlackBoard()
