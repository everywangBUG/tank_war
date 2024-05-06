import CanvasAbstract from "./CanvasAbstract"
import config from "../config"
import BulletModel from "../model/BulletModel"
import Tank from "./Tank"
import Player from "./Player"

class Bullet extends CanvasAbstract {
  intervalId: number = 0
  num: number = config.water.num
  Model: BulletModelConstructor = BulletModel
  
  render(): void {
    this.intervalId = setInterval(() => {
      this.createBullet()
      this.renderModels()
    }, 30)
  }
  
  createBullet() {
    Tank.models.forEach((tank) => {
      const isExist = this.models.some(m => m.tank === tank)
      // 如果坦克已经发射过子弹了则不需要发射
      if (!isExist) {
        this.models.push(new BulletModel(tank))
      }
    })
  }

  stop() {
    clearInterval(this.intervalId)
  }

  addPlayBullet() {
    this.models.push(new BulletModel(Player.models[0]))
  }
}

export default new Bullet("Bullet")