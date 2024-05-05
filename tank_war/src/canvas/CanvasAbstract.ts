import config from "../config"
import Position from "../service/Position"

export default abstract class CanvasAbstract {
  public models: IModel[] = []
  abstract render(): void
  abstract num: number
  abstract Model: ModelConstructor | BulletModelConstructor
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
    this.canvas.setAttribute("name", this.name)
    this.rootEl.insertAdjacentElement('afterbegin', this.canvas)
  }

  protected createModels() {
    const positionInstance = new Position()
    positionInstance.getCollection(this.num).forEach((position) => {
      const model = this.Model as ModelConstructor
      const instance = new model(position.x, position.y)
      this.models.push(instance)
    })
  }

  public renderModels() {
    this.ctx.clearRect(0, 0, config.root.width, config.root.height)
    this.models.forEach((model) => model.render())
  }

  public removeModel(model: IModel) {
    this.models = this.models.filter(item => item !== model)
  }
}
