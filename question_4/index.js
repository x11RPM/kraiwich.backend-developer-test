const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

removeChar = (str, index) => {
  const result = str.split('')
  result.splice(index, 1)
  return result.join('')
}

// Reference -> https://youtu.be/78t_yHuGg-0
const output = []
permutations = (str, chose = '') => {

  if (str == '') {
      output.push(chose)
  } else {
      for(let i = 0; i < str.length;i ++) {
          let c = str[i]
          chose += c
          str = removeChar(str,i)
          permutations(str, chose);
          str = [str.slice(0, i), c, str.slice(i)].join('')
          chose = removeChar(chose, chose.length-1)
      }
  }
  return output
}

readline.question('Question 4 input: ', args => {
  readline.close()
  if (typeof args != 'string') {
    args = args.toString()
  }
  if (args.length != 6) {
    console.log('Invalid input')
  } else {
    const result = permutations(args)
    console.log(result)
  }
})