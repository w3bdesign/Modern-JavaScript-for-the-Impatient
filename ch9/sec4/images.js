'use strict'
const produceAfterDelay = (result, delay) => {
  return new Promise((resolve, reject) => {
    const callback = () => resolve(result)
    setTimeout(callback, delay)
  })                     
}

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
  const imgdiv = document.getElementById('images')

  const promise1 = produceAfterDelay(42, 1000)
  promise1.then(console.log) // Log the value when ready
  
  const promise2 = loadImage('../../hanafuda/1-1.png')
  promise2.then(img => imgdiv.appendChild(img)) // Append the image when ready
})