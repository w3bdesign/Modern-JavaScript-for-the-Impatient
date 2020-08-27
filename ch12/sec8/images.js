'use strict'
const loadImage = url => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    const callback = () => {
      if (request.status == 200) { 
        const blob = new Blob([request.response], {type: 'image/png'})
        const img = document.createElement('img')
        img.src = URL.createObjectURL(blob)
        resolve(img)
      } else {
        reject(Error(`${request.status}: ${request.statusText}`))
      }
    }

    request.open('GET', url)
    request.responseType = 'blob'
    request.addEventListener('load', callback)
    request.addEventListener('error', event => reject(Error('Network error')));
    request.send()
  })  
}

async function* loadHanafudaImages(month) {
  for (let i = 1; i <= 4; i++) {
    const img = await loadImage(`../../hanafuda/${month}-${i}.png`)
    yield img
  }
}

const main = async () => {
  const imgdiv = document.getElementById('images')
  const month = 1
  for await (const img of loadHanafudaImages(month)) {
    imgdiv.appendChild(img)
  }
}

document.addEventListener('DOMContentLoaded', main)