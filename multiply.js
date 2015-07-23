// node --allow-natives-syntax --trace-inlining multiply.js

var optimize = require('./opt')

function multiply(a, b) {
  var result = 0
  if (a < 0) {
    a = -a
    b = -b
  }
  for (; a > 0; a--) {
    result += b
  }
  return result
}


for (var i = 0; i < 20000; i++) {
  multiply(i, 5)
}

optimize.printStatus(multiply)
