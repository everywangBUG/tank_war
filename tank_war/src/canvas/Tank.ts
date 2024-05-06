import CanvasAbstract from "./CanvasAbstract"
import TankModel from "../model/TankModel"
import config from "../config"
import Position from "../service/Position"

class Tank extends CanvasAbstract {
  num: number = config.tank.num
  Model: ModelConstructor = TankModel
  intervalId: number = 0
  render(): void {
    this.createModels()
    super.renderModels()

    this.intervalId = setInterval(() => {
      super.renderModels()
    }, config.timeOut)

  }

  stop(): void {
    clearInterval(this.intervalId)
  }

  createModels(): void {
    const positionInstance = new Position()
    for (let i = 0; i < this.num; i++) {
      const position = positionInstance.position()
      const instance = new this.Model(position.x, 0)
      this.models.push(instance)
    }
  }
}

export default new Tank("Tank")