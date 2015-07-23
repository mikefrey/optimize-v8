// node --allow-natives-syntax testOpt.js

var optimize = require('./opt')

var fns = require('./unoptimizable')

fns.forEach(function(fn) {
  fn()
  fn()
  optimize.onNextCall(fn)
  fn()

  console.log(optimize.funcName(fn), optimize.getStatus(fn))
})
