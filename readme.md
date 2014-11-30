# custom-event-emitter
custom-event-emitter is a browser mixin that makes emitting [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) objects really simple. The trade-off is that all said events bubble, and are cancelable.

## install
```sh
$ npm install michaelrhodes/custom-event-emitter
```

## usage
```js
var emitter = require('custom-event-emitter')
var element = document.createElement('p')

// Adds an emit function to the element.
emitter.call(element)

element.addEventListener('hi', function(e) {
  console.log(e.detail)
  > 'how are you?'
})

element.emit('hi', 'how are you?')
```

## license
[MIT](http://opensource.org/licenses/MIT)
