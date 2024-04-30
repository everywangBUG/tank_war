import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";

export default class WaterModel extends ModelAbstract implements IModel {
  render(): void {
    super.draw(images.get('wall')!)
  }
}
