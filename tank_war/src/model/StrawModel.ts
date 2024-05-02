import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";

export default class StrawModel extends ModelAbstract implements IModel {
  name: string = 'straw'
  images(): HTMLImageElement {
    return images.get('straw')!
  }
}