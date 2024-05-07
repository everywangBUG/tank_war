import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import audio from "../service/audio";


export default abstract class ModelAbstract {
  abstract name: string
  abstract render(): void
  abstract images(): HTMLImageElement
  abstract canvas: ICanvas
  direction: directionEnum = directionEnum.top
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

  public destroyed() {
    this.canvas.removeModel(this)
    this.canvas.ctx.clearRect(this.x, this.y, this.width, this.height)
  }

  protected blast(model: IModel) {
    audio.blast()
    Array.from({length: 8}, (_, i) => i + 1).reduce((promise, index) => {
      return new Promise((resolve) =>
        setTimeout(() => {
          const img = new Image()
          img.src = `/src/statics/images/blasts/blast${index}.gif`
          img.onload = () => {
            this.canvas.ctx.drawImage(img, model.x, model.y, model.width, model.height)
          }
          resolve(promise)
        }, 100)
      )
    }, Promise.resolve())
  }
}
