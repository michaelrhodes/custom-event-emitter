var slice = Array.prototype.slice
var collapse = function (args) {
  args = slice.call(args).slice(2)
  if (args.length === 1) {
    args = args[0]
  }
  return args
}

module.exports = (function () {
  function emit (options, name) {
    if (name === void(0)) {
      throw new Error('Event name not specified')
    }

    options = options || {}
    options.detail = collapse(arguments)

    this.dispatchEvent(
      new CustomEvent(name, options)
    )
  }

  return function (options) {
    this.emit = emit.bind(this, options)
  }
})()
