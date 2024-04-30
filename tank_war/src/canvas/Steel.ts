import CanvasAbstract from "./CanvasAbstract"
import SteelModel from "../model/SteelModel"
import config from "../config"

class Straw extends CanvasAbstract {
  num: number = config.steel.num
  Model: ModelConstructor = SteelModel
  constructor() {
    super()
  }
  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new Straw()