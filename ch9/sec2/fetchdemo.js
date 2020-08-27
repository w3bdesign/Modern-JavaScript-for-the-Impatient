'use strict'
document.addEventListener('DOMContentLoaded', () => {
  const promise = fetch('https://horstmann.com/javascript-impatient/hanafuda/index.html')
  document.getElementById('text').textContent = 'Promise pending'
  console.log({promise})  
  promise
    .then(response => response.text())
    .then(text => {
      document.getElementById('text').textContent = text
      console.log({promise})
    })    
})