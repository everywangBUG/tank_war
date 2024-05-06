import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";
import Wall from "../canvas/Wall";

export default class WaterModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = Wall
  name: 'wall' = 'wall'

  render() {
    super.draw()
  }

  images(): HTMLImageElement {
    return images.get(this.name)!
  }
}
