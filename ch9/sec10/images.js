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
  const div = n => document.getElementById(`images${n}`)

  // Two calls to await
  const step1 = async () => {
    const result = await fetch('https://dog.ceo/api/breeds/image/random')
    const imageJSON = await result.json()
    div(1).appendChild(document.createTextNode(JSON.stringify(imageJSON)))
  }
  step1()

  // Calling async functions
  {
    const getDogImageURL = async () => {
      const result = await fetch('https://dog.ceo/api/breeds/image/random')
      const imageJSON = await result.json()
      return imageJSON.message
    }
   
    const step2 = async () => {
      const url = await getDogImageURL()
      const img = await loadImage(url)
      div(2).appendChild(img)     
    }
    step2()
  }

  const getDogImageURL = async () => {
    const result = await fetch('https://dog.ceo/api/breeds/image/random')
    const imageJSON = await result.json()
    return imageJSON.message
  }
    
  // An async function returns a future
  const step3 = async () => {
    const imgdiv = div(3)
    getDogImageURL()
      .then(url => loadImage(url))
      .then(img => imgdiv.appendChild(img))
  }
  step3()
  
  // Use await instead of then     
  const step4 = async () => {
    const imgdiv = div(4)
    const url = await getDogImageURL()
    const img = await loadImage(url)
    imgdiv.appendChild(img)
  }
  step4()

  // return vs return await
  {
    const step5 = async () => {
      const loadDogImage = async () => {
        const result = await fetch('https://dog.ceo/api/breeds/image/random')
        const imageJSON = await result.json()
        return await loadImage(imageJSON.message)
      }

      div(5).appendChild(await loadDogImage())
    }
    step5()
  
    const step6 = async () => {
      const loadDogImage = async () => {
        const result = await fetch('https://dog.ceo/api/breeds/image/random')
        const imageJSON = await result.json()
        return loadImage(imageJSON.message)
      }

      div(6).appendChild(await loadDogImage())
    }
    step6()
  }

  // An async function returning a value (actually a resolved promise)
  const getJSONProperty = async (url, ...keys) => {
    if (url === undefined) return null
      // Actually returns Promise.resolve(null)
    const result = await fetch(url)
    const json = await result.json()
    let value = json
    for (const key of keys) value = value[key]
    return value
  }

  const step7 = async () => {
    const result1 = await getJSONProperty()
    const result2 = await getJSONProperty('https://dog.ceo/api/breeds/image/random', 'message')
    div(7).appendChild(document.createTextNode(JSON.stringify(result1) + ', ' + JSON.stringify(result2)))
  }
  step7()
})