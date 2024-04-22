import './global.css'
class BlackBoard {
    constructor(
      public el =  document.getElementById("dashboard") as HTMLCanvasElement,
      private ctx = el.getContext("2d")!,
      private width : number = el.width,
      private height: number = el.height,
      private btn: HTMLButtonElement = document.createElement("button"),
      private bgColor = 'black',
      private lineColor = 'white'
    ) {
      this.init()
      this.bindEvent()
    }
    
    private init() {
      this.ctx.fillStyle = this.bgColor
      this.ctx?.fillRect(0, 0, this.width, this.height)
      this.btn.textContent = '清屏'
      this.btn.style.marginTop = '10px'
      this.el.insertAdjacentElement('afterend', this.btn)
    }

    private bindEvent() {
      // 鼠标移动
      const callback = this.drawLine.bind(this)
      this.el.addEventListener("mousedown", () => {
        // 绘制
          this.ctx.beginPath()
          this.ctx.strokeStyle = this.lineColor
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

    // 清屏操作
    public clear() {
      this.btn.addEventListener('click', () => {
        this.ctx.fillStyle = this.bgColor
        this.ctx.fillRect(0, 0, this.width, this.height)
      })
      return this
    }

    public setBgColor(color: string) {
      this.bgColor = color
      this.ctx.fillStyle = color
      this.ctx.fillRect(0, 0, this.width, this.height)
      return this
    }

    public setLineColor() {
      const colors = ['white', 'red', 'blue', 'green', 'black', 'yellow', 'pink', 'skyblue']
      const container = document.createElement('div')
      container.classList.add('color-container')
      colors.forEach(color => {
        const item = document.createElement('div')
        item.classList.add('color-item')
        item.style.backgroundColor = color
        container.insertAdjacentElement('beforeend', item)
        item.addEventListener('click', () => {
          this.lineColor = color
        })
        this.btn.insertAdjacentElement('afterend', container)
      })
      return this
    }
}

const instance = new BlackBoard()
instance.clear().setBgColor('green').setLineColor('red')