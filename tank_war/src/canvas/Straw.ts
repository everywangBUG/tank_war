import CanvasAbstract from "./CanvasAbstract"
import StrawModel from "../model/StrawModel"
import config from "../config"

class Straw extends CanvasAbstract {
  num: number = config.straw.num
  Model: ModelConstructor = StrawModel
  constructor() {
    super()
  }
  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new Straw()