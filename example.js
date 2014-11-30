var emitter = require('./index')
var element = document.createElement('p')

// Adds an emit function to the element.
emitter.call(element)

element.addEventListener('hi', function(e) {
  console.log(e.detail)
})

element.emit('hi', 'how are you?')

