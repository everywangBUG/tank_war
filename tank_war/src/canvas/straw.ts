import CanvasAbstract from "./canvasAbstract"
import config from "../config"
import StrawModel from "../model/strawModel"

class Straw extends CanvasAbstract {
  num: number = config.straw.num
  Model: ModelConstructor = StrawModel
  constructor() {
    super()
    this.render()
  }
  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new Straw()