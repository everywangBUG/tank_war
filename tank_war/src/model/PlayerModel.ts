import ModelAbstract from "./ModelAbstract";
import { images } from "../service/image";
import Player from "../canvas/Player";
import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import util from "../util";
import Steel from "../canvas/Steel";
import Wall from "../canvas/Wall";
import Tank from "../canvas/Tank";

type PlayerTank = keyof typeof config.images

export default class PlayerModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = Player
  bindEvent: boolean = false
  name: string = 'Player'

  render() {
    super.draw()
    if (!this.bindEvent) {
      this.bindEvent = true
      document.addEventListener('keydown', this.changeDirection.bind(this))
      document.addEventListener('keydown', this.move.bind(this))
    }
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
  
  move(event: KeyboardEvent) {
    let x = this.x
    let y = this.y
    switch(event.code) {
      case 'ArrowUp':
        y -= config.player.speed
        break
      case 'ArrowDown':
        y += config.player.speed
        break
      case 'ArrowLeft':
        x -= config.player.speed
        break
      case 'ArrowRight':
        x += config.player.speed
        break
    }
    // 碰撞检测
    const touchSteelWall = util.isModelOut(x, y, config.model.width, config.model.height, [...Steel.models, ...Wall.models, ...Tank.models])
    if (util.isCanvasOut(x, y)) {
      return
    } else if (touchSteelWall) {
      return
    } else {
      this.x = x
      this.y = y
      this.canvas.renderModels()
    }
  }
  
  images(): HTMLImageElement {
    let direction = `${this.direction}${this.name}` as PlayerTank
    return images.get(direction)!
  }
}
