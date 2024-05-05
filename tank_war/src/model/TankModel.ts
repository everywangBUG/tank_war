import ModelAbstract from "./ModelAbstract";
import { images } from '../service/image';
import { directionEnum } from "../enum/directionEnum";
import config from "../config";
import Wall from "../canvas/Wall";
import Steel from "../canvas/Steel";
import Water from "../canvas/Water";
import Tank from "../canvas/Tank";

type tankDirection = keyof typeof config.images

export default class TankModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = Tank
  name: string = 'Tank'
  render(): void {
    super.draw()
    this.move()
    if (Math.floor(Math.random() * 5) === 1) {
      this.direction = directionEnum.bottom
    }
  }

  images(): HTMLImageElement {
    return this.randomImages()
  }


  protected move() {
    while(true) {
      let x = this.x
      let y = this.y
      switch(this.direction) {
        case directionEnum.top:
          y--
          break
        case directionEnum.right:
          x++
          break
        case directionEnum.bottom:
          y++
          break
        case directionEnum.left:
          x--
          break
      }
      if (this.isOut(x, y)) {
        // 如果x，y不合法，随机改变方向
        this.randomDirection()
      } else {
        // 如果x，y合法，退出循环
        this.x = x
        this.y = y
        break
      }
    }
    super.draw()
  }
  
  protected isOut(x: number, y: number): boolean {
    if (x < 0 || x + this.width > config.root.width || y < 0 || y + this.height > config.root.height) {
      return true
    }
    const models = [...Wall.models, ...Steel.models, ...Water.models]

    return models.some(model => {
      const state = 
        x + this.width <= model.x ||
        x >= model.x + model.width ||
        y + this.height <= model.y ||
        y >= model.y + model.height

        return !state
    })
  }
  
  protected draw() {
    this.canvas.ctx.drawImage(this.images(), this.x, this.y, 2, 2)
  }

  // 随机坦克方向
  protected randomImages() {
    let direction = this.direction
    const imageTank = `${direction}${this.name}` as tankDirection
    return images.get(imageTank)!
  }
}
