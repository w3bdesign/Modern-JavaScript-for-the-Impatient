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

const loadDogImage = async () => {
  const result = await fetch('https://dog.ceo/api/breeds/image/random')
  const imageJSON = await result.json()
  return await loadImage(imageJSON.message)
}

document.addEventListener('DOMContentLoaded', () => {
  const div = n => document.getElementById(`images${n}`)
  const url = '../../hanafuda/10-4.png'

  // Successive calls with await
  const step1 = async () => {
    const img1 = await loadImage(url) 
    const img2 = await loadDogImage() // Only starts after the first image was loaded
    div(1).appendChild(img1)
    div(1).appendChild(img2)
  }
  step1()

  // Concurrent calls with await Promise.all
  const step2 = async () => {
    const [img1, img2] = await Promise.all([loadImage(url), loadDogImage()])
    div(2).appendChild(img1)
    div(2).appendChild(img2)
  }
  step2()

  // Caution: This looks concurrent but isn't
  const step3 = async () => {
    const [img1, img2] = [await loadImage(url), await loadDogImage()]
      // Error—still sequential
    div(3).appendChild(img1)
    div(3).appendChild(img2)
  }
  step3()    
})