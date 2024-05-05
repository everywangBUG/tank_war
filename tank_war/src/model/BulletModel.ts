import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";
import Bullet from "../canvas/Bullet";
import config from "../config";
import { directionEnum } from "../enum/directionEnum";

export default class BulletModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = Bullet
  name: string = 'bullet'
  constructor(public tank: IModel) {
    super(tank.x + config.model.width / 2, tank.y + config.model.height / 2)  
    this.direction = tank.direction as unknown as directionEnum
  }

  render() {
    switch(this.direction) {
      case directionEnum.top:
        this.y -= 2
        break
      case directionEnum.bottom:
        this.y += 2
        break
      case directionEnum.left:
        this.x -= 2
        break
      case directionEnum.right:
        this.x += 2
        break
    }
    this.draw()
  }
  
  images(): HTMLImageElement {
    return images.get('bullet')!
  }

  protected draw() {
    this.canvas.ctx.drawImage(this.images(), this.x, this.y, 2, 2)
  }
}
