import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";
import Bullet from "../canvas/Bullet";
import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import util from "../util";
import Wall from "../canvas/Wall";
import Boss from "../canvas/Boss";
import Steel from "../canvas/Steel";

export default class BulletModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = Bullet
  name: 'bullet' = 'bullet'
  constructor(public tank: IModel) {
    super(tank.x + config.model.width / 2, tank.y + config.model.height / 2)  
    this.direction = tank.direction as unknown as directionEnum
  }

  render() {
    let x = this.x
    let y = this.y
    switch(this.direction) {
      case directionEnum.top:
        y -= config.bullet.speed
        break
      case directionEnum.bottom:
        y += config.bullet.speed
        break
      case directionEnum.left:
        x -= config.bullet.speed
        break
      case directionEnum.right:
        x += config.bullet.speed
        break
    }
    const touchModel = util.isModelOut(x, y, 2, 2, [...Wall.models, ...Boss.models])
    const touchSteel = util.isModelOut(x, y, 2, 2, Steel.models)
    if (util.isCanvasOut(x, y, 2, 2) || touchSteel) {
      this.destroyed()
    } else if (touchModel) {
      this.destroyed()  
      touchModel.destroyed()
    } else {
      this.x = x
      this.y = y
      this.draw()
    }
  }
  
  images(): HTMLImageElement {
    return images.get(this.name)!
  }

  protected draw() {
    this.canvas.ctx.drawImage(this.images(), this.x, this.y, 2, 2)
  }
}
