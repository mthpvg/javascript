// Credit: https://medium.freecodecamp.org/reduce-f47a7da511a9

const numbers = [4, 16, 256]

// MAP
const reduceDouble = numbers.reduce((total, amount) => {
  total.push(amount * 2)
  return total
}, [])
console.log(reduceDouble)

const mapDouble = numbers.map((n) => n * 2)
console.log(mapDouble)

// FILTER
const reduceBiggerThan4 = numbers.reduce((total, amount) => {
  if (amount > 4) total.push(amount)
  return total
}, [])
console.log(reduceBiggerThan4)

const filterBiggerThan4 = numbers.filter(n => n > 4)
console.log(filterBiggerThan4)

// TALLY
const spottedAnimals = ['lion', 'tiger', 'lion', 'leopard', 'tiger', 'lion']
const count = spottedAnimals.reduce((tally, animal) => {
  tally[animal] = (tally[animal] || 0) + 1
  return tally
}, {})
console.log(count)

// PIPING
function add2(input) { return input + 2}
function substract8(input) { return input - 8 }
function quadruple(input) { return input * 4 }

const pipeline = [add2, quadruple, substract8]

const result = pipeline.reduce((total, fn) => fn(total), 0)
console.log(result)
