import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";
import { directionEnum } from "../enum/directionEnum";
import config from "../config";

type tankDirection = keyof typeof config.images

export default class TankModel extends ModelAbstract implements IModel {
  protected direction: directionEnum = directionEnum.top
  name: string = 'Tank'
  render(): void {
    this.randomDirection()
    super.draw(this.randomTank())

    setInterval(() => {
      this.move()
    }, 10)
  }


  protected move() {
    this.canvas.clearRect(this.x, this.y, config.model.width, config.model.height)
    switch(this.direction) {
      case directionEnum.top:
        this.y -= 2
        break
      case directionEnum.right:
        this.x += 2
        break
      case directionEnum.bottom:
        this.y += 2
        break
      case directionEnum.left:
        this.x -= 2
        break
    }
    super.draw(this.randomTank())
  }

  protected randomDirection() {
    this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
  }
  
  // 随机坦克方向
  protected randomTank() {
    let direction = this.direction
    const imageTank = `${direction}${this.name}` as tankDirection
    return images.get(imageTank)!
  }
}
