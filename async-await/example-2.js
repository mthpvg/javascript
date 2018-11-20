// Credit: https://techbrij.com/javascript-async-await-parallel-sequence

function doJob(x, time) {
  return new Promise(resolve => {
  console.log(`Start: ${x}`)
    setTimeout(() => {
        console.log(`End: ${x}`)
      resolve(x)
    }, time)
  })
}


async function SerialFlow1(){
  const r1 = await doJob('S1_long', 100)
  const r2 = await doJob('S1_short', 10)

  console.log(`${r1}-${r2}`)
}

async function SerialFlow2(){
  const r1 = await doJob('S2_long', 100)
  const r2 = await doJob('S2_short', 10)

  console.log(`${r1}-${r2}`)
}

async function ParallelFlow1() {
  const result1 =  doJob('P1_long', 100)
  const result2 =  doJob('P1_short', 10)

  let r = `${await result1}-${await result2}`

  console.log(`${r}`)
}

async function ParallelFlow2() {
  let result1 =  doJob('P2_long', 100)
  let result2 =  doJob('P2_short', 10)

  let r1 = await result1
  let r2 = await result2

  console.log(`${r1}-${r2}`)
}

SerialFlow1()
SerialFlow2()
ParallelFlow1()
ParallelFlow2()
