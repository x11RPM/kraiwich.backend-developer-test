
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

lottoCombination = num => {
  // Slice last 2 input
  const lastTwo = num.slice(4)
  const result = []
  for(let i = 0; i <= parseInt(num.slice(0,4)); i++) {
    // In case number length ;ess than 4. prepend '0' to result to make it's length qual 4
    // and append last two digit  
    result[i] = '0'.repeat(4 - i.toString().length) + i + lastTwo
  }
  console.log(result)
  return result
}

// Waiting for input parameter
readline.question('Question 3 input: ', arg => {
  readline.close()
  if (typeof arg != 'string') {
    args = args.toString()
  }
  if (arg.length != 6) {
    console.log('Invalid input')
  } else {
    lottoCombination(arg)
  }
})