import straw from './statics/images/straw/straw.png'
import wall from './statics/images/wall/wall.gif'
import water from './statics/images/water/water.gif'
import steel from './statics/images/wall/steels.gif'
import leftTank from './statics/images/tank/left.gif'
import rightTank from './statics/images/tank/right.gif'
import bottomTank from './statics/images/tank/bottom.gif'
import topTank from './statics/images/tank/top.gif'
import bullet from './statics/images/bullet/bullet.jpg'
import boss from './statics/images/boss/boss.png'

export default {
  timeOut: 10,
  root: {
    width: 1200,
    height: 800,
  },
  model: {
    width: 50,
    height: 50,
  },
  images: {
    straw,
    wall,
    water,
    steel,
    leftTank,
    rightTank,
    bottomTank,
    topTank,
    bullet,
    boss
  },
  straw: {
    num: 50,
  },
  wall: {
    num: 50,
  },
  water:{
    num: 40,
  },
  steel: {
    num: 30,
  },
  tank: {
    num: 10,
  }
}