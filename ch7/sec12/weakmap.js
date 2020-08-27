const timeToLive = new WeakMap()
window.setInterval(() => {
  const svg = document.getElementById('svg')
  /*
    Count down each circle's time to live and remove those that
    have no time left. They don't need to be deleted from the weak map
  */
  
  for (let i = svg.children.length - 1; i >= 0; i--) {
    let c = svg.children[i]
    let ttl = timeToLive.get(c) // Fetch ttl data from weak map
    ttl--
    if (ttl <= 0) svg.removeChild(c)
    else timeToLive.set(c, ttl) // Update ttl data in weak map
  }

  /*
    Add one circle with random position, color, and time to live
  */
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  let x = Math.random() * 500
  let y = Math.random() * 500
  let size = 50
  let color = '#00ff0080'
  color = `#${Math.floor(Math.random() * 256 * 256 * 256).toString(16).padStart(6, '0')}40`
  circle.setAttribute('cx', x + size / 2)
  circle.setAttribute('cy', y + size / 2)
  circle.setAttribute('r', size / 2)
  circle.setAttribute('fill', color)
  svg.appendChild(circle)
  let ttl = Math.random() * 100
  
  timeToLive.set(circle, ttl) // Attach ttl data in weak map
}, 100)
