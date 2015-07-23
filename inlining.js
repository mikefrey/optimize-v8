// node --allow-natives-syntax --trace-inlining inlining.js

var optimize = require('./opt')

function measure(fn) {
  var time = process.hrtime()
  fn()
  var diff = process.hrtime(time)
  return (diff[0] * 1e9 + diff[1]) / 1e6
}


function square(n) {
  return n * n
}

function squareBig(n) {
  return n * n
  /*
  This is a big comment. This is a big comment.
  This is a big comment. This is a big comment.
  This is a big comment. This is a big comment.
  This is a big comment. This is a big comment.
  This is a big comment. This is a big comment.
  This is a big comment. This is a big comment.
  This is a big comment. This is a big comment.
  This is a big comment. This is a big comment.
  This is a big comment. This is a big comment.
  This is a big comment. This is a big comment.
  This is a big comment. This is a big comment.
  This is a big comment. Don't ya think?
  */
}


var time1 = measure(function testSquare() {
  for (var i = 0; i < 1e7; i++) {
    var sq = square(i)
  }
})

var time2 = measure(function testBigSquare() {
  for (var i = 0; i < 1e7; i++) {
    var sq = squareBig(i)
  }
})


console.log('square Time:', time1 + 'ms')
console.log('squareBig Time:', time2 + 'ms')

optimize.printHeapUsage()
