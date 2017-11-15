const { createCanvas, loadImage, Image } = require('canvas')
const shapely = require('../plugins/shapely')

module.exports = class Draw {
  constructor(orientation) {
    this.orientation = orientation === 'landscape' ? 0 : 1
    this.width = this.orientation === 0 ? 640 : 384
    this.height = this.orientation === 0 ? 384 : 640
  }

  getImage() {
    const canvas = createCanvas(this.width, this.height)
    const ctx = canvas.getContext('2d')
    const s = shapely(ctx)

    s.rect({
      x: 10,
      y: 10,
      width:100,
      height: 100,
      style: { fill: "#000000" }
    })

    s.rect({
      x: 110,
      y: 110,
      width:100,
      height: 100,
      style: { fill: "#ff0000" }
    })


    return canvas.toDataURL()
  }
}
