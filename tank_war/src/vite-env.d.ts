/// <reference types="vite/client" />

interface ModelConstructor {
  new (x: number, y:  number): IModel
}

interface BulletModelConstructor {
  new (tank: IModel): IModel
}

interface IModel {
  images(): HTMLImageElement
  render(): void
  tank?: IModel
  width: number
  height: number
  name:string
  x: number
  y: number
  direction: string
  destroyed(): void
}

interface ICanvas {
  Model: ModelConstructor | BulletModelConstructor
  num: number
  ctx: CanvasRenderingContext2D
  removeModel(model: IModel): void
}