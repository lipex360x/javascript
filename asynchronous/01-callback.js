function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function f1(callback) {
  setTimeout(function () {
    console.log('f1')
    if(callback) callback()
  }, rand(1,3))
}

function f2(callback) {
  setTimeout(function () {
    console.log('f2')
    if(callback) callback()
  }, rand(1,3))
}

function f3(callback) {
  setTimeout(function () {
    console.log('f3')
    if(callback) callback()
  }, rand(1,3))
}

// Callback Hell
f1(function () {
  f2(function() {
    f3(function () {
      console.log('Hello World')
    })
  })
})