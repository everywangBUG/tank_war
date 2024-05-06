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
import Player from './canvas/Play'


const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.root.width + 'px'
app.style.height = config.root.height + 'px'

function bootStrap() {
    Promise.all(imagePromise).then(() => {
      Straw.render()
      Wall.render()
      Water.render()
      Steel.render()
      Tank.render()
      Bullet.render()
      Boss.render()
      Player.render()
    })
}
bootStrap()
