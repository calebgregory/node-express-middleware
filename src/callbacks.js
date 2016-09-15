function asyncFa(x, f) {
  console.log('asyncFa called with', x)
  const nextX = x * 10

  let i = 0;
  const interval = setInterval(() => console.log(++i), 1000)

  setTimeout(() => {
    clearInterval(interval)
    return f(nextX)
  }, 5000)
}

function asyncFb(y) {
  console.log('asyncFb called with', y)
  const nextY = y * 2;

  let i = 5;
  const interval = setInterval(() => console.log(++i), 1000)

  setTimeout(() => {
    clearInterval(interval)
    console.log(nextY)
  }, 5000)
}

const x = 10;
asyncFa(x, asyncFb)
