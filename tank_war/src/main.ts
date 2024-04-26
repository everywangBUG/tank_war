import './style.css'
import 'normalize.css'
import config from './config'
import './canvas/straw'

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.root.width + 'px'
app.style.height = config.root.height + 'px'
