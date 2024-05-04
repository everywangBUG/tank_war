/// <reference types="vite/client" />

interface ModelConstructor {
  new (x: number, y:  number): IModel
}

interface IModel {
  images(): HTMLImageElement
  render(): void
  width: number
  height: number
  name:string
  x: number
  y: number
}

interface ICanvas {
  Model: ModelConstructor
  num: number
  ctx: CanvasRenderingContext2D
}