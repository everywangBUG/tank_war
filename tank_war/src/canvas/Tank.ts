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
    super.renderModels()
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
}

export default new Tank()