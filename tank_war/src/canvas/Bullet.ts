import CanvasAbstract from "./CanvasAbstract"
import config from "../config"
import BulletModel from "../model/BulletModel"

class Bullet extends CanvasAbstract {
  num: number = config.water.num
  Model: ModelConstructor = BulletModel
  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new Bullet()