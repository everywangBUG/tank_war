import CanvasAbstract from "./CanvasAbstract"
import config from "../config"
import WaterModel from "../model/WaterModel"

class Water extends CanvasAbstract {
  num: number = config.water.num
  Model: ModelConstructor = WaterModel
  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new Water("Water")