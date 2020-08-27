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

export default () => { addTo('images') }
const addTo = async id => {
  const result = await fetch('https://dog.ceo/api/breeds/image/random')
  const json = await result.json()
  const img = await loadImage(json.message)  
  document.getElementById(id).appendChild(img)
}
export const namedFeature = addTo
  // just to match the generic name in the book
