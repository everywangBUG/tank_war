import './style.scss'
import 'normalize.css'
import config from './config'
import './canvas/straw'
import './service/image'
import { imagePromise, images } from './service/image'

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.root.width + 'px'
app.style.height = config.root.height + 'px'

async function bootStrap() {
  console.log(imagePromise, '111')
  await Promise.all(imagePromise)
  console.log(images.get('straw'), '222')
  console.log(images.get('ab'), '222')
}

void bootStrap()