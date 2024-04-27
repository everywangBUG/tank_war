import config from "../config"

export default class CanvasAbstract {
  constructor(
    protected rootEl = document.querySelector<HTMLDivElement>('#app')!,
    protected canvas = document.createElement('canvas')!,
    protected ctx = canvas.getContext('2d')!,
  ) {
    this.createCanvas()
    this.drawStraw()
  }

  protected createCanvas() {
    this.canvas.width = config.root.width
    this.canvas.height = config.root.height
    this.ctx.fillStyle = '#CAC7D5'
    this.ctx.fillRect(0, 0, config.root.width, config.root.height)
    this.rootEl.insertAdjacentElement('afterbegin', this.canvas)
  }

  protected drawStraw() {
    const imgEl = document.createElement('img')
    imgEl.src = config.images.straw
    const { x, y } = this.position()
    imgEl.onload = () => {
      this.ctx.drawImage(imgEl, x, y, config.model.width, config.model.height)
    }
  }

  protected position() {
    return {
      x: 220,
      y: 220,
    }
  }
}
