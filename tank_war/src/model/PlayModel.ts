import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";
import Play from "../canvas/Play";
import config from "../config";

type PlayerTank = keyof typeof config.images

export default class PlayerModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = Play
  name: string = 'Player'

  render() {
    super.draw()
  }

  images(): HTMLImageElement {
    let direction = `${this.direction}${this.name}` as PlayerTank
    return images.get(direction)!
  }
}
