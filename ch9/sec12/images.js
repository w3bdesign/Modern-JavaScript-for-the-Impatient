'use strict'

// TODO: Find more CORS-friendly services
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

    request.open('GET', 'https://cors-anywhere.herokuapp.com/' + url)
    request.responseType = 'blob'
    request.addEventListener('load', callback)
    request.addEventListener('error', event => reject(Error('Network error')));
    request.send()
  })  
}

const brokenImage = () => { 
  const uri = 'data:image/png;base64,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'
  const img = document.createElement('img')
  img.setAttribute('src', uri)
  return img
}

const getJSONProperty = async (url, ...keys) => {
  if (url === undefined) return null
    // Actually returns Promise.resolve(null)
  const result = await fetch(url)
  const json = await result.json()
  let value = json
  for (const key of keys) value = value[key]
  return value
}

document.addEventListener('DOMContentLoaded', () => {
  const imgdiv = document.getElementById('images')

  // An exception in an async function produces a rejected promise
  const getAnimalImageURL = async type => {
    if (type === 'cat') {
      return getJSONProperty('https://api.thecatapi.com/v1/images/search', '0', 'url')
    } else if (type === 'dog') {
      return getJSONProperty('https://dog.ceo/api/breeds/image/random', 'message')
    } else {
      throw Error('bad type') // Async function returns rejected promise
    }
  }

  // The await operator turns a rejected promise into an exception
  const getAnimalImage = async type => {
    try {
      const url = await getAnimalImageURL(type)
      return loadImage(url)
    } catch {
      return brokenImage()
    }
  }

  const step1 = async () => {
    imgdiv.appendChild(await getAnimalImage('dog'))
    imgdiv.appendChild(await getAnimalImage('cat'))
    imgdiv.appendChild(await getAnimalImage('dinosaur'))
  }
  step1()
})