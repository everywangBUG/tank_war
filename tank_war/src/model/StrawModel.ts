import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";
import Straw from "../canvas/Straw";

export default class StrawModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = Straw
  name: string = 'straw'

  render() {}

  images(): HTMLImageElement {
    return images.get('straw')!
  }
}
