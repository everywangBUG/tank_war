import CanvasAbstract from "./CanvasAbstract"
import config from "../config"
import WaterModel from "../model/WaterModel"

class Straw extends CanvasAbstract {
  num: number = config.water.num
  Model: ModelConstructor = WaterModel
  constructor() {
    super()
  }
  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new Straw()