function asyncF(x, f) {
  const nextX = x * 10

  let i = 0;
  const interval = setInterval(() => console.log(++i), 1000)

  setTimeout(() => {
    clearInterval(interval)
    return f(nextX)
  }, 5000)

  console.log('timeout:', timeout)
}

const x = 10;

console.log('calling asyncF')
asyncF(x, function(y) { console.log(`got it! ${y}`) })
