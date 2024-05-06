import CanvasAbstract from "./CanvasAbstract"
import BossModel from "../model/BossModel"
import config from "../config"

class Boss extends CanvasAbstract {
  num: number = config.straw.num
  public Model: ModelConstructor = BossModel
  render(): void {
    this.createBoss()
    super.renderModels()
  }

  createBoss(): void {
    const pos = { x: config.root.width / 2, y: config.root.height - config.model.height }
    const model = this.Model as ModelConstructor
    const instance = new model(pos.x, pos.y)
    this.models.push(instance)
  }
}

export default new Boss("Boss")