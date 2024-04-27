import config from "../config";

type imageType = keyof typeof config.images
export const images = new Map<imageType, HTMLImageElement>()

export const imagePromise = Object.entries(config.images).map(([key, value]) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = value
    img.onload = () => {
      images.set(key as imageType, img)
      resolve(img)
    }
  })
})

