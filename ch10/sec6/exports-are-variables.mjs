// node exports-are-variables.mjs



import * as logging from './modules/logging.mjs'


logging.info('This message is logged')

logging.setLevel(logging.Level.WARN)


logging.info('This message is not logged')

try {
  logging.currentLevel = logging.Level.WARN 
  // Error—cannot assign to imported variable
} catch (exception) {
  console.log('Error:', exception.message) // Cannot assign to read only property 'currentLevel' of object '[object Module]'
}
