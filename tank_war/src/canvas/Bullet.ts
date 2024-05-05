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
      const isExist = this.models.some(m => m.tank === tank)
      // 如果坦克已经发射过子弹了则不需要发射
      if (!isExist) {
        this.models.push(new Bullet(tank))
      }
    })
  }
}

export default new Bullet("Bullet")