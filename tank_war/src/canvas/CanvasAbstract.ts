import config from "../config"
import Position from "../service/Position"

export default abstract class CanvasAbstract {
  public models: IModel[] = []
  abstract render(): void
  abstract num: number
  abstract Model: ModelConstructor
  collection = []

  constructor(
    protected name: string,
    protected rootEl = document.querySelector<HTMLDivElement>('#app')!,
    protected canvas = document.createElement('canvas')!,
    public ctx = canvas.getContext('2d')!,
  ) {
    this.createCanvas()
  }

  protected createCanvas() {
    this.canvas.width = config.root.width
    this.canvas.height = config.root.height
    console.log(this.name, '777')
    this.rootEl.insertAdjacentElement('afterbegin', this.canvas)
  }

  protected createModels() {
    const positionInstance = new Position()
    positionInstance.getCollection(this.num).forEach((position) => {
      const instance = new this.Model(position.x, position.y)
      this.models.push(instance)
    })
  }

  protected renderModels() {
    this.ctx.clearRect(0, 0, config.root.width, config.root.height)
    this.models.forEach((model) => {
      this.ctx.drawImage(model.images(), model.x, model.y, config.model.width, config.model.height)
    })
  }
}
