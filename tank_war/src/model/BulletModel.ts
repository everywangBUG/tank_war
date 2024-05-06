import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";
import Bullet from "../canvas/Bullet";
import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import util from "../util";
import Straw from "../canvas/Straw";
import Wall from "../canvas/Wall";

export default class BulletModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = Bullet
  name: string = 'bullet'
  constructor(public tank: IModel) {
    super(tank.x + config.model.width / 2, tank.y + config.model.height / 2)  
    this.direction = tank.direction as unknown as directionEnum
  }

  render() {
    let x = this.x
    let y = this.y
    switch(this.direction) {
      case directionEnum.top:
        y -= 2
        break
      case directionEnum.bottom:
        y += 2
        break
      case directionEnum.left:
        x -= 2
        break
      case directionEnum.right:
        x += 2
        break
    }
    const touchModel = util.isModelOut(x, y, 2, 2, [...Straw.models, ...Wall.models])
    if (util.isCanvasOut(x, y, 2, 2)) {
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
    return images.get('bullet')!
  }

  protected draw() {
    this.canvas.ctx.drawImage(this.images(), this.x, this.y, 2, 2)
  }
}
