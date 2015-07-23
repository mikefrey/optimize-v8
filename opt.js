var optimize = exports


exports.getStatus = function getStatus(fn) {
  switch(%GetOptimizationStatus(fn)) {
    case 1: return grn("Function is optimized")
    case 2: return red("Function is not optimized")
    case 3: return grn("Function is always optimized")
    case 4: return red("Function is never optimized")
    case 6: return red("Function is maybe deoptimized")
  }
}

function grn(msg) {
  return '\033[32m' + msg + '\033[0m'
}
function red(msg) {
  return '\033[31m' + msg + '\033[0m'
}

exports.printStatus = function printStatus(fn) {
  console.log(exports.getStatus(fn))
}

exports.never = function(fn) {
  %NeverOptimizeFunction(fn)
}

exports.onNextCall = function(fn) {
  %OptimizeFunctionOnNextCall(fn)
}

exports.funcName = function(fn) {
  return %FunctionGetName(fn)
}

exports.measure = function(fn) {
  var time = process.hrtime()
  fn()
  var diff = process.hrtime(time)
  return (diff[0] * 1e9 + diff[1]) / 1e6
}

exports.printHeapUsage = function() {
  console.log(%GetHeapUsage()/1e6 + 'mb')
}


