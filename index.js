var slice = Array.prototype.slice
var collapse = function(args) {
  args = slice.call(args).slice(1)
  if (args.length === 1) {
    args = args[0]
  }
  return args
}

module.exports = (function() {
  function emit(name) {
    if (name === void(0)) {
      throw new Error('Event name not specified')
    }

    this.dispatchEvent(
      new CustomEvent(name, {
        detail: collapse(arguments),
        bubbles: true,
        cancelable: true
      })
    )
  }

  return function () {
    this.emit = emit
  }
})()
