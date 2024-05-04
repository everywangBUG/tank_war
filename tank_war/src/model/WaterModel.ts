import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";
import Water from "../canvas/Water";

export default class WallModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = Water
  name: string = 'water'

  render() {}
  
  images(): HTMLImageElement {
    return images.get('water')!
  }
}
