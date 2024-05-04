import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";
import Bullet from "../canvas/Bullet";

export default class BulletModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = Bullet
  name: string = 'bullet'

  render() {}
  
  images(): HTMLImageElement {
    return images.get('water')!
  }
}
