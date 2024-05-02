import CanvasAbstract from "./CanvasAbstract"
import TankModel from "../model/TankModel"
import config from "../config"
import Position from "../service/Position"

class Tank extends CanvasAbstract {
  num: number = config.tank.num
  Model: ModelConstructor = TankModel
  constructor() {
    super()
  }
  render(): void {
    this.createModels()
    this.renderModels()

    setInterval(() => {
      this.renderModels()
    }, config.timeOut)

  }

  protected createModels(): void {
    const positionInstance = new Position()
    for (let i = 0; i < this.num; i++) {
      const position = positionInstance.position()
      const instance = new this.Model(this.ctx, position.x, 0)
      const instance1 = new this.Model(this.ctx, position.x, config.model.height)
      this.models.push(instance)
      this.models.push(instance1)
    }
  }

  protected renderModels() {
    this.ctx.clearRect(0, 0, config.root.width, config.root.height)
    this.models.forEach((model) => {
      model.render()
      this.ctx.drawImage(model.images(), model.x, model.y, config.model.width, config.model.height)
    })
  }
}

export default new Tank()