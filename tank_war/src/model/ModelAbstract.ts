import config from "../config";
import { directionEnum } from "../enum/directionEnum";


export default abstract class ModelAbstract {
  abstract name: string
  abstract render(): void
  abstract images(): HTMLImageElement
  public direction: directionEnum = directionEnum.top
  public abstract canvas: ICanvas
  public width = config.model.width
  public height = config.model.height


  constructor(public x: number, public y: number ) {
    this.randomDirection()
  }
  
  protected draw() {
    this.canvas.ctx.drawImage(this.images(), this.x, this.y, this.width, this.height)
  }

  protected randomDirection() {
    this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
  }
}
