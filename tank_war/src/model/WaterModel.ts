import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";

export default class WallModel extends ModelAbstract implements IModel {
  name: string = 'water'
  images(): HTMLImageElement {
    return images.get('water')!
  }
}
