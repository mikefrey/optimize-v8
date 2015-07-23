function noop(){}



function argPass() {
  noop(arguments)
}

function argReturn() {
  return arguments
}

function argScope() {
  var args = arguments
  return function() {
    return args
  }
}

function argReassign(options, callback) {
  if (arguments.length == 1) {
    callback = options
    options = null
  }
}

function tryCatch() {
  return
  try{} catch(ex) {}
}

function tryFinally() {
  return
  try{} finally {}
}

function testWith() {
  return
  with({}) {}
}

function testDebugger() {
  return
  debugger
}

function testProto() {
  return { __proto__: 3 }
}

function testGetter() {
  return { get prop() { return 3 } }
}

function testSetter() {
  return { set prop(value) {  } }
}

function testForIn1() {
  var obj = { a: 4 }
  for (var key in obj) {
    return function() {
      return key
    }
  }
}

var key2
function testForIn2() {
  var obj = { a: 4 }
  for (key2 in obj);
}

function testForIn3() {
  var obj = { a:5, b:4, c:3 }
  delete obj.a
  for (var key in obj);
}

function testForIn4() {
  for (var key in [1, 2, 3]);
}

function* testGenerator() {
  return 4
}

function testForOf() {
  var arr = [1, 2, 3]
  for(var i of arr);
}

function testClass() {
  'use strict'
  class Foo {}
}


function taggedTemplateString() {
  function tag(strings) { return strings.join('') }
  return tag`stuff in a template string`
}


module.exports = [
  argPass,
  argReturn,
  argScope,
  argReassign,
  tryCatch,
  tryFinally,
  testWith,
  testDebugger,
  testProto,
  testGetter,
  testSetter,
  testForIn1,
  testForIn2,
  testForIn3,
  testForIn4,
  testGenerator,
  testForOf,
  testClass,
  taggedTemplateString
]
