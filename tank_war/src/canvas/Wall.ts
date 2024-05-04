import CanvasAbstract from "./CanvasAbstract"
import config from "../config"
import WallModel from "../model/WallModel"

class Straw extends CanvasAbstract {
  num: number = config.wall.num
  Model: ModelConstructor = WallModel
  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new Straw()