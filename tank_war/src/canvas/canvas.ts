import config from "../config"

export default class CanvasAbstract {
  constructor(
    protected rootEl = document.querySelector<HTMLDivElement>('#app')!,
    protected canvas = document.createElement('canvas')!,
    protected ctx = canvas.getContext('2d')!,
  ) {
    canvas.width = config.canvas.width
    canvas.height = config.canvas.height
    canvas.style.background = config.canvas.backgroundColor
    rootEl.insertAdjacentElement('afterbegin', canvas)
  }
}
