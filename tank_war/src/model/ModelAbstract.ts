import config from "../config";
import { directionEnum } from "../enum/directionEnum";


export default abstract class ModelAbstract {
  abstract name: string
  abstract render(): void
  protected direction: directionEnum = directionEnum.top
  abstract images(): HTMLImageElement


  constructor(protected canvas: CanvasRenderingContext2D, public x: number, public y: number ) {
    this.randomDirection()
  }
  
  protected draw() {
    this.canvas.drawImage(this.images(), this.x, this.y, config.model.width, config.model.height)
  }

  protected randomDirection() {
    this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
  }
}
