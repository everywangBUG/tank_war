import straw from './statics/images/straw/straw.png'
import wall from './statics/images/wall/wall.gif'
import water from './statics/images/water/water.gif'
import steel from './statics/images/wall/steels.gif'
import leftTank from './statics/images/tank/left.gif'
import rightTank from './statics/images/tank/right.gif'
import bottomTank from './statics/images/tank/bottom.gif'
import topTank from './statics/images/tank/top.gif'

export default {
  timeOut: 5,
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
  },
  straw: {
    num: 50,
  },
  wall: {
    num: 20,
  },
  water:{
    num: 20,
  },
  steel: {
    num: 30,
  },
  tank: {
    num: 50,
  }
}