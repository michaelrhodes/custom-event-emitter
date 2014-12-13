# custom-event-emitter
custom-event-emitter is a browser mixin that makes emitting [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) objects really simple.

## install
```sh
$ npm install custom-event-emitter
```

## usage
```js
var emitter = require('custom-event-emitter')
var element = document.createElement('p')

// Adds an emit function to the element.
// (the second argument is optional)
emitter.call(element, {
  bubbles: true,
  cancelable: true
})

element.addEventListener('hi', function(e) {
  console.log(e.detail)
  > 'how are you?'
})

element.emit('hi', 'how are you?')
```

You can run the above example like so:
```sh
$ npm run example
```

## license
[MIT](http://opensource.org/licenses/MIT)
