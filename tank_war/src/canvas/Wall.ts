import CanvasAbstract from "./CanvasAbstract"
import config from "../config"
import WallModel from "../model/WallModel"

class Wall extends CanvasAbstract {
  num: number = config.wall.num
  Model: ModelConstructor = WallModel
  render(): void {
    super.createModels()
    this.createBossWall()
    super.renderModels()
  }

  protected createBossWall(): void {
    const cw = config.root.width
    const ch = config.root.height
    const mw = config.model.width
    const mh = config.model.height
    const pos = [
      { x: cw / 2 + mw * 2, y: ch - mh },
      { x: cw / 2 + mw * 2, y: ch - mh * 2 },
      { x: cw / 2 + mw * 2, y: ch - mh * 3 },
      { x: cw / 2 + mw, y: ch - mh * 3 },
      { x: cw / 2, y: ch - mh * 3 },
      { x: cw / 2 - mw * 2, y: ch - mh },
      { x: cw / 2 - mw * 2, y: ch - mh * 2 },
      { x: cw / 2 - mw * 2, y: ch - mh * 3 },
      { x: cw / 2 - mw, y: ch - mh * 3 },
    ]
    pos.forEach((position) => {
      const model = this.Model as ModelConstructor
      const instance = new model(position.x, position.y)
      this.models.push(instance)
    })
  }
}

export default new Wall("Wall")