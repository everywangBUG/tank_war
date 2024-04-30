import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";

export default class WaterModel extends ModelAbstract implements IModel {
  name: string = 'wall'
  images(): HTMLImageElement {
    return images.get('wall')!
  }
}
