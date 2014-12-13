var emitter = require('./index')
var element = document.createElement('p')

// Adds an emit function to the element.
// (the second argument is optional)
emitter.call(element, {
  bubbles: true,
  cancelable: true
})

element.addEventListener('hi', function(e) {
  console.log(e.detail)
})

element.emit('hi', 'how are you?')

