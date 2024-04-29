import config from "../config"
import { imagePromise } from "../service/image"
import Position from "../service/position"

export default abstract class CanvasAbstract {
  protected models: IModel[] = []
  abstract render(): void
  abstract num: number
  abstract Model: ModelConstructor

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

  protected async createModels() {
    await this.bootStrap()
    const positionInstance = new Position()
    positionInstance.getCollection(this.num).forEach((position) => {
      const instance = new this.Model(this.ctx, position.x, position.y)
      this.models.push(instance)
    })
  }

  protected renderModels() {
    this.models.forEach((model) => model.render())
  }

  protected async bootStrap() {
    await Promise.all(imagePromise)
  }
  
}
