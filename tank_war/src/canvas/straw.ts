import CanvasAbstract from "./canvasAbstract"
import config from "../config"
import StrawModel from "../model/strawModel"

class Straw extends CanvasAbstract {
  constructor() {
    super()
    super.drawStraw(config.straw.num, StrawModel)
  }
}

export default new Straw()