export const Level = { FINE: 1, INFO: 2, WARN: 3, ERROR: 4, OFF: 5 }
export let currentLevel = Level.INFO
export const setLevel = level => { currentLevel = level }

export const fine = message => { if (currentLevel == Level.FINE)
  console.log('FINE', message) }
export const info = message => { if (currentLevel <= Level.INFO)
  console.log('INFO', message) }
export const warn = message => { if (currentLevel <= Level.WARN)
  console.log('WARN', message) }
export const error = message => { if (currentLevel <= Level.ERROR)
  console.log('ERROR', message) }