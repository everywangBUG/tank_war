import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";
import Steel from "../canvas/Steel";

export default class StrawModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = Steel
  name: 'steel' = 'steel'

  render() {
    super.draw()
  }
  
  images(): HTMLImageElement {
    return images.get(this.name)!
  }
}
