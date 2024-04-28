import './style.scss'
import 'normalize.css'
import config from './config'
import './model/straw'
import './service/image'

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.root.width + 'px'
app.style.height = config.root.height + 'px'

