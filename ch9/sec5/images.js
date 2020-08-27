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
  // Promise chaining
  {
    const imgdiv = document.getElementById('images1')
    
    const promise1 = loadImage('../../hanafuda/1-1.png')
    const promise2 = promise1.then(img => {
      imgdiv.appendChild(img)
      return loadImage('../../hanafuda/1-2.png') // Another promise
    })
    promise2.then(img => {
      imgdiv.appendChild(img)
    })
      .then(imgdiv.append(document.createElement('br')))
  }
  
  
  // No need to save each promise in a separate variable
  // Use a chain of promises as a "pipeline"
  {
    const imgdiv = document.getElementById('images2')
    
    loadImage('../../hanafuda/2-1.png')
      .then(img => {
        imgdiv.appendChild(img)
        return loadImage('../../hanafuda/2-2.png') 
      })
      .then(img => imgdiv.appendChild(img))
  }
  
  // Another example for chaining
  // If you get an error, try another CORS-friendly API
  // from https://github.com/public-apis/public-apis
  {
    fetch('https://api.frankfurter.app/latest')
      .then(response => response.text())
      .then(console.log)
  }

  // You can intermingle synchronous and asynchronous tasks
  {
    const imgdiv = document.getElementById('images3')
    
    loadImage('../../hanafuda/3-1.png')
      .then(img => imgdiv.appendChild(img)) // Synchronous
      .then(() => loadImage('../../hanafuda/3-2.png')) // Asynchronous
      .then(img => imgdiv.appendChild(img)) // Synchronous
  }

  // Make the pipeline more symmetric
  {
    const imgdiv = document.getElementById('images4')
    
    Promise.resolve()
      .then(() => loadImage('../../hanafuda/4-1.png'))
      .then(img => imgdiv.appendChild(img)) 
      .then(() => loadImage('../../hanafuda/4-2.png'))
      .then(img => imgdiv.appendChild(img))
  }

  // Building a pipeline with a loop
  {
    const imgdiv = document.getElementById('images5')
    
    let n = 4
    let p = Promise.resolve()
    for (let i = 1; i <= n; i++) {
      p = p.then(() => loadImage(`../../hanafuda/5-${i}.png`))
        .then(img => imgdiv.appendChild(img))
    }
  }

  // Caution: The then method discards non-function arguments
  // The last image is loaded but not appended
  {
    const imgdiv = document.getElementById('images6')
        
    loadImage('../../hanafuda/6-1.png')
      .then(img => imgdiv.appendChild(img))
      .then(loadImage('../../hanafuda/6-2.png'))
        // Error—argument of then isn't a function
      .then(img => imgdiv.appendChild(img))
  }
})