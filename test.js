var test = require('tape')
var emitter = require('./index')
var body = document.body

test('it mixes in', function (assert) {
  var element = document.createElement('p')
  emitter.call(element)
  assert.ok(element.hasOwnProperty('emit'), 'yep')
  assert.end()
})

test('events don’t bubble by default', function (assert) {
  var container = document.createElement('div')
  var element = document.createElement('p')
  var bubbled = false

  emitter.call(element)
  container.appendChild(element)
  body.appendChild(container)

  container.addEventListener('hi', function () {
    bubbled = true
  })

  element.emit('hi', 'how are you?')

  setTimeout(function () {
    body.removeChild(container)
    assert.ok(!bubbled, 'yep')
    assert.end()
  })
})

test('events can be made to bubble', function (assert) {
  var container = document.createElement('div')
  var element = document.createElement('p')
  var bubbled = false

  emitter.call(element, {
    bubbles: true
  })

  container.appendChild(element)
  body.appendChild(container)

  container.addEventListener('hi', function () {
    bubbled = true
  })

  element.emit('hi', 'how are you?')

  setTimeout(function () {
    body.removeChild(container)
    assert.ok(bubbled, 'yep')
    assert.end()
  })
})
