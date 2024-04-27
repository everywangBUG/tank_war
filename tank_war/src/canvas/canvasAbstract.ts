import config from "../config"
import { images,imagePromise } from "../service/image"

export default class CanvasAbstract {
  constructor(
    protected rootEl = document.querySelector<HTMLDivElement>('#app')!,
    protected canvas = document.createElement('canvas')!,
    protected ctx = canvas.getContext('2d')!,
  ) {
    this.createCanvas()
    this.drawStraw(config.straw.num)
  }

  protected createCanvas() {
    this.canvas.width = config.root.width
    this.canvas.height = config.root.height
    this.ctx.fillStyle = '#CAC7D5'
    this.ctx.fillRect(0, 0, config.root.width, config.root.height)
    this.rootEl.insertAdjacentElement('afterbegin', this.canvas)
  }

  protected async drawStraw(num: number) {
    const { x, y } = this.position()
    await this.bootStrap()
    Array.from({ length: num }).forEach(() => {
      this.ctx.drawImage(images.get('straw')!, x, y, config.model.width, config.model.height)
    })
  }

  protected position() {
    return {
      x: 220,
      y: 220,
    }
  }

  protected async bootStrap() {
    await Promise.all(imagePromise)
  }
  
}
