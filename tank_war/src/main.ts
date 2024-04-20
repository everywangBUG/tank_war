import './global.css'
class BlackBoard {
    constructor(
      public el =  document.getElementById("dashboard") as HTMLCanvasElement,
      private ctx = el.getContext("2d"),
      private width : number = el.width,
      private height: number = el.height,
    ) {
      if (this.ctx) {
        this.ctx.fillStyle = "black"
        this.ctx?.fillRect(0, 0, this.width, this.height)
      }
    }
}

const instance = new BlackBoard()