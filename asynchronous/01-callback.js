function rand(min, max) {
  min = min * 1000
  max = max * 1000

  const num = Math.random() * (max - min) + min
  return Math.floor(num)
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