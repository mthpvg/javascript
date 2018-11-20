// Credit: https://flaviocopes.com/javascript-async-await/

// async prepended functions return a Promise
let counter = 0

function doSomethingAsync() {
    return new Promise((resolve) => setTimeout(() => {
      console.log(`counter = ${counter}`)
      counter += 1
      resolve('foo')
    }, 16))
}

async function doSomething() {
  return await doSomethingAsync()
}

console.log('Begin')
doSomething()
doSomething().then(console.log)
console.log('End')
