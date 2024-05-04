import CanvasAbstract from "./CanvasAbstract"
import config from "../config"
import BulletModel from "../model/BulletModel"
import Tank from "./Tank"

class Bullet extends CanvasAbstract {
  num: number = config.water.num
  Model: ModelConstructor = BulletModel
  render(): void {
    // super.createModels()
    // super.renderModels()
    // setInterval(this.createBullet, 1000)
  }

  createBullet(): void {
    Tank.models.forEach((tank) => {
      
    })
  }
}

export default new Bullet("Bullet")