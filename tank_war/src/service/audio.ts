export default {
  el(id: string) {
    return document.getElementById(id)! as HTMLAudioElement
  },
  start() {
    this.el('aStart').play()
  },
  fire() {
    this.el('aFire').play()
  }
}