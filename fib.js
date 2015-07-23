// node --allow-natives-syntax fib.js

var optimize = require('./opt')
var time

function fibonacciNever(n) {
  if (n < 2) return 1
  else return fibonacciNever(n-2) + fibonacciNever(n-1)
}

function fibonacciPre(n) {
  if (n < 2) return 1
  else return fibonacciPre(n-2) + fibonacciPre(n-1)
}

fibonacciNever(2)
fibonacciPre(2)

optimize.never(fibonacciNever)
optimize.onNextCall(fibonacciPre)

time = optimize.measure(function() {
  fibonacciNever(36)
})
console.log('\nNever Optimize:', time + 'ms')
optimize.printStatus(fibonacciNever)


time = optimize.measure(function() {
  fibonacciPre(36)
})
console.log('\nPre-Optimize:', time + 'ms')
optimize.printStatus(fibonacciPre)
