import config from "../config"
import { imagePromise } from "../service/image"

export default abstract class CanvasAbstract {
  constructor(
    protected rootEl = document.querySelector<HTMLDivElement>('#app')!,
    protected canvas = document.createElement('canvas')!,
    protected ctx = canvas.getContext('2d')!,
  ) {
    this.createCanvas()
    this.drawStraw(config.model.num)
  }

  protected createCanvas() {
    this.canvas.width = config.root.width
    this.canvas.height = config.root.height
    this.ctx.fillStyle = '#CAC7D5'
    this.ctx.fillRect(0, 0, config.root.width, config.root.height)
    this.rootEl.insertAdjacentElement('afterbegin', this.canvas)
  }

  protected async drawStraw(num: number, Model?: ModelConstructor) {
    await this.bootStrap()
    this.positionCollection(num).forEach((position) => {
      const instance = Model && new Model(this.ctx, position.x, position.y)
      instance?.render()
    })
  }

  protected positionCollection(num: number) {
    const collection: {x: number, y: number}[] = []
    for (let i = 0; i < num; i++) {
      while(true) {
        const position = this.position()
        // 相邻横坐标相减的绝对值不能小于config.images.width，相邻纵坐标相减的绝对值不能小于config.images.height，不能超出root的边界
        const exits = collection.some(item => {
          const x = Math.abs(item.x - position.x)
          const y = Math.abs(item.y - position.y)
          return x < config.model.width / 2 || y < config.model.height / 2
        })
        if (!exits) {
          collection.push(position)
          break
        }
      }
    }
    return collection
  }

  protected position() {
    return {
      x: Math.floor((Math.random()* (config.root.width / config.model.width)) * config.model.width),
      y: Math.floor((Math.random()* (config.root.height / config.model.height)) * config.model.height),
    }
  }

  protected async bootStrap() {
    await Promise.all(imagePromise)
  }
  
}
