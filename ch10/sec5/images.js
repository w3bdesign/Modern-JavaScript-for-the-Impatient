document.addEventListener('DOMContentLoaded', () => {
  for (const button of document.getElementsByTagName('button'))
    button.addEventListener('click', () => {
      const action = button.textContent.toLowerCase()
      const args = action
      import(`./plugins/${action}.mjs`)
        .then(module => {
          module.default()
          module.namedFeature(args)
          
        })
    })
})