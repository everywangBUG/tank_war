import './style.scss'
import 'normalize.css'
import config from './config'
import './service/image'
import { imagePromise } from "./service/image"
import Straw from "./canvas/Straw"
import Wall from "./canvas/Wall"
import Water from './canvas/Water'
import Steel from './canvas/Steel'
import Tank from './canvas/Tank'
import Bullet from './canvas/Bullet'
import Boss from './canvas/Boss'
import Player from './canvas/Player'
import audio from './service/audio'

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.root.width + 'px'
app.style.height = config.root.height + 'px'

export default {
  isStart: false,
  state: 0, // 0 未开始 1 游戏失败 2 游戏成功
  intervalId: 0,
  bootStrap() {
    app.addEventListener('click', async () => {
      await this.start()
      this.intervalId = setInterval(() => {
        if (Player.models.length === 0 || Boss.models.length === 0)  {
          this.state = 1
          this.stop()
        }
        if (Tank.models.length === 0) {
          this.state = 2
          this.stop()
        }
      }, 100)
    })
  },
  stop() {
    clearInterval(this.intervalId)
    Tank.stop()
    Bullet.stop()
  },
  async start() {
    if (this.isStart) return
    this.isStart = true
    audio.start()
    app.style.backgroundImage = 'none'
    Promise.all(imagePromise).then(() => {
      Player.render()
      Straw.render()
      Wall.render()
      Water.render()
      Steel.render()
      Tank.render()
      Bullet.render()
      Boss.render()
    })
  }
}
