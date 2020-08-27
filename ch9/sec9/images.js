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

document.addEventListener('DOMContentLoaded', () => {
  // An async function can simply wait for a promise to settle
  {
    const imgdiv = document.getElementById('images1')

    const putImage = async (url, element) => {
      const img = await loadImage(url)
      element.appendChild(img)  
    }

    putImage('../../hanafuda/1-1.png', imgdiv)
  }

  // The compiler transforms the code into a promise pipeline
  {
    const imgdiv = document.getElementById('images2')
    const putImage = (url, element) => {
      loadImage(url)
        .then(img => element.appendChild(img))
    }

    putImage('../../hanafuda/1-1.png', imgdiv)
  }

  // Multiple await are ok
  {
    
    const imgdiv = document.getElementById('images3')

    const putTwoImages = async (url1, url2, element) => {
      const img1 = await loadImage(url1)
      element.appendChild(img1)  
      const img2 = await loadImage(url2)
      element.appendChild(img2)  
    }

    putTwoImages('../../hanafuda/1-1.png', '../../hanafuda/1-2.png', imgdiv)    
  }

  // Loops are ok too
  {
    const imgdiv = document.getElementById('images4')

    const putImages = async (urls, element) => {
      for (const url of urls) {
        const img = await loadImage(url)
        element.appendChild(img)
      }
    }

    putImages([
      '../../hanafuda/1-1.png',
      '../../hanafuda/1-2.png',
      '../../hanafuda/1-3.png',
      '../../hanafuda/1-4.png'], imgdiv)
  }

  // Caution: If you forget await, the promise will eventually settle
  // but nobody waits for it. These images could be added in any order
  {
    const imgdiv = document.getElementById('images5')
    const putImage = async (url, element) => {
      const img = await loadImage(url)
      element.appendChild(img)  
    }
    
    const putImages = async (urls, element) => {
      for (const url of urls)
        putImage(url, element) // Error—no await for async putImage
    }

    putImages([
      '../../hanafuda/1-1.png',
      '../../hanafuda/1-2.png',
      '../../hanafuda/1-3.png',
      '../../hanafuda/1-4.png'], imgdiv)
  }
})