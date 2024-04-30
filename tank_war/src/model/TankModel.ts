import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";
import { directionEnum } from "../enum/directionEnum";
import config from "../config";

type tankDirection = keyof typeof config.images

export default class TankModel extends ModelAbstract implements IModel {
  protected direction: directionEnum = directionEnum.top
  render(): void {
    this.randomDirection()
    super.draw(this.randomTank())
  }

  protected randomDirection() {
    this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
  }
  
  // 随机坦克方向
  protected randomTank() {
    let direction = this.direction
    const imageTank = `${direction}Tank` as tankDirection
    return images.get(imageTank)!
  }
}
