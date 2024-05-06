import CanvasAbstract from "./CanvasAbstract"
import PlayerModel from "../model/PlayModel"
import config from "../config"

class Player extends CanvasAbstract {
  num: number = 10
  public Model: ModelConstructor = PlayerModel
  render(): void {
    this.createPlayerModels()
    super.renderModels()
  }

  createPlayerModels() {
    const pos = { x: config.root.width / 2 + config.model.width * 3, y: config.root.height - config.model.height }
    const model = this.Model as ModelConstructor
    const instance = new model(pos.x, pos.y)
    this.models.push(instance)
  }
}

export default new Player("Play")