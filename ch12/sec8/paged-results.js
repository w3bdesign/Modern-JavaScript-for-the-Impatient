'use strict'
let originalConsole = window.console
let console = {
  log(...args) {
    originalConsole.log(...args)
    document.getElementById('console').textContent += args.map(JSON.stringify).join(' ') + '\n'
  }
}


async function* loadResults(url) {
  let page = 0
  try {
    while (true) {
      page++
      const response = await fetch(`${url}&page=${page}`)
      yield await response.json()    
    }
  } catch {
    // End iteration
  }
}
const findResult = async (queryURL, callback) => {
  for await (const result of loadResults(queryURL)) {
    if (callback(result)) return result
  }
  return undefined
}

async function main() {
  // TODO: Find a CORS friendly service
  let url = 'https://chroniclingamerica.loc.gov/search/titles/results?terms=michigan&format=json'
  url = 'https://cors-anywhere.herokuapp.com/' + url
  let result = await findResult(url, r => r.startIndex >= 200)  
  console.log({result})
}

main()