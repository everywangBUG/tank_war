import CanvasAbstract from "../canvas/canvasAbstract"
import config from "../config"
import model from "../model/straw"

class Straw extends CanvasAbstract {
  render(): void {
    super.drawStraw(config.straw.num, model)
  }
}

export default new Straw()