/// <reference types="vite/client" />

interface ModelConstructor {
  new (canvas: CanvasRenderingContext2D, x: number, y:  number): IModel
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
