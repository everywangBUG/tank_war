import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";

export default class StrawModel extends ModelAbstract implements IModel {
  name: string = 'steel'
  images(): HTMLImageElement {
    return images.get('steel')!
  }
}
