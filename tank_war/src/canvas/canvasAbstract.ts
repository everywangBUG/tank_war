import config from "../config"
import { imagePromise } from "../service/image"
import Position from "../service/position"

export default abstract class CanvasAbstract {
  constructor(
    protected rootEl = document.querySelector<HTMLDivElement>('#app')!,
    protected canvas = document.createElement('canvas')!,
    protected ctx = canvas.getContext('2d')!,
  ) {
    this.createCanvas()
  }

  protected createCanvas() {
    this.canvas.width = config.root.width
    this.canvas.height = config.root.height
    this.ctx.fillStyle = '#CAC7D5'
    this.ctx.fillRect(0, 0, config.root.width, config.root.height)
    this.rootEl.insertAdjacentElement('afterbegin', this.canvas)
  }

  protected async drawStraw(num: number, Model: ModelConstructor) {
    await this.bootStrap()
    const positionInstance = new Position()
    positionInstance.getCollection(num).forEach((position) => {
      const instance = new Model(this.ctx, position.x, position.y)
      instance.render()
    })
  }

  protected async bootStrap() {
    await Promise.all(imagePromise)
  }
  
}
