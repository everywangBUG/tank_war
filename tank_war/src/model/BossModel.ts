import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";
import Boss from "../canvas/Boss";

export default class BossModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = Boss
  name: 'boss' = 'boss'

  render() {
    super.draw()
  }

  images(): HTMLImageElement {
    return images.get(this.name)!
  }
}
