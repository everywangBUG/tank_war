import Steel from "./canvas/Steel"
import Wall from "./canvas/Wall"
import Water from "./canvas/Water"
import config from "./config"

export default {
  // 画布溢出检测
  isCanvasOut(x: number, y: number, width = config.model.width, height = config.model.height): boolean {
    return x < 0 || x + width > config.root.width || y < 0 || y + height > config.root.height
  },
  // 模型溢出检测
  isModelOut(
    x: number,
    y: number,
    width = config.model.width,
    height = config.model.height,
    models = [...Wall.models, ...Steel.models, ...Water.models]
  ): boolean {
    if (x < 0 || x + width > config.root.width || y < 0 || y + height > config.root.height) {
      return true
    }

    return models.some(model => {
      const state = 
        x + width <= model.x ||
        x >= model.x + model.width ||
        y + height <= model.y ||
        y >= model.y + model.height

        return !state
    })
  }
}