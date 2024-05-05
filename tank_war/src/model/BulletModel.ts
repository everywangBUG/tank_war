import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";
import Bullet from "../canvas/Bullet";
import config from "../config";

export default class BulletModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = Bullet
  name: string = 'bullet'
  constructor(public tank: IModel) {
    super(tank.x + config.model.width / 2, tank.y + config.model.height / 2)
  }

  render() {
    super.draw()
  }
  
  images(): HTMLImageElement {
    return images.get('water')!
  }
}
