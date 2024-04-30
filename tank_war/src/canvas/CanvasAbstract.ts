import config from "../config"
import Position from "../service/Position"

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
    this.rootEl.insertAdjacentElement('afterbegin', this.canvas)
  }

  protected createModels() {
    const positionInstance = new Position()
    positionInstance.getCollection(this.num).forEach((position) => {
      const instance = new this.Model(this.ctx, position.x, position.y)
      this.models.push(instance)
    })
  }

  protected renderModels() {
    this.ctx.clearRect(0, 0, config.root.width, config.root.height)
    this.models.forEach((model) => model.render())
  }
}
