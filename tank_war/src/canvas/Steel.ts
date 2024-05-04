import CanvasAbstract from "./CanvasAbstract"
import SteelModel from "../model/SteelModel"
import config from "../config"

class Steel extends CanvasAbstract {
  num: number = config.steel.num
  Model: ModelConstructor = SteelModel
  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new Steel("Steel")