 import config from "../config"

type PositionType = {x: number, y: number}
export default class Position {
  collection: PositionType[] = []
  public getCollection(num: number) {
    const collection: PositionType[] = []
    for (let i = 0; i < num; i++) {
      while(true) {
        const position = this.position()
          const exits = this.collection.some(item => item.x === position.x && item.y === position.y)
        if (!exits) {
          collection.push(position)
          this.collection.push(position)
          break
        }
      }
    }
    return collection
  }

  public position() {
    return {
      x: Math.floor(Math.random()*(config.root.width / config.model.width)) * config.model.width,
      y: Math.floor(Math.random()*(config.root.height / config.model.height - 5) * config.model.height + config.model.height),
    }
  }
}
