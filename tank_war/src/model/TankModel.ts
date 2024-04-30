import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";

export default class TankModel extends ModelAbstract implements IModel {
  render(): void {
    super.draw(this.randomTank())
  }

  protected randomTank() {
    return images.get('tank')!
  }
}
