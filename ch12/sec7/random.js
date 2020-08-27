let originalConsole = window.console
let console = {
  log(...args) {
    originalConsole.log(...args)
    document.getElementById('console').textContent += args.join(' ') + '\n'
  }
}


const url = 'https://www.random.org/integers/?num=1&min=1&max=1000000000\
&col=1&base=10&format=plain&rnd=new'
const req = new XMLHttpRequest();
req.open('GET', url)
req.addEventListener('load', () => console.log('random number', req.response)) // Callback
req.send()

const trueRandom = handler => {
  const url = 'https://www.random.org/integers/?num=1&min=1&max=1000000000\
&col=1&base=10&format=plain&rnd=new'
  const req = new XMLHttpRequest();
  req.open('GET', url)
  req.addEventListener('load', () => handler(parseInt(req.response)))
  req.send()
}

trueRandom(receivedValue => console.log('random number', receivedValue))

trueRandom(first => 
  trueRandom(second =>
    trueRandom(third => console.log('sum of three random numbers', first + second + third))))

function* main() {
  const first = yield nextTrueRandom()
  const second = yield nextTrueRandom()
  const third = yield nextTrueRandom()
  console.log('sum of three random numbers', first + second + third)
}

const iter = main()

const nextTrueRandom = () => {
  trueRandom(receivedValue => iter.next(receivedValue))
}

iter.next() // Kick it off