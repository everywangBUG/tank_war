import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";
import Player from "../canvas/Player";
import config from "../config";
import { directionEnum } from "../enum/directionEnum";

type PlayerTank = keyof typeof config.images

export default class PlayerModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = Player
  name: string = 'Player'

  render() {
    super.draw()
    document.addEventListener('keydown', this.changeDirection.bind(this))
  }

  changeDirection(event: KeyboardEvent) {
    switch(event.code) {
      case 'ArrowUp':
        this.direction = directionEnum.top
        break
      case 'ArrowDown':
        this.direction = directionEnum.bottom
        break
      case 'ArrowLeft':
        this.direction = directionEnum.left
        break
      case 'ArrowRight':
        this.direction = directionEnum.right
        break
    }
    this.canvas.renderModels()
  }
  
  images(): HTMLImageElement {
    let direction = `${this.direction}${this.name}` as PlayerTank
    return images.get(direction)!
  }
}
