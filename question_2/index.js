const fs = require('fs')
const csv = require('csv-parser') // The example is easy to understand, hight performace and up-to-date.

const results = []
// Read file content from data.csv
fs.createReadStream(__dirname + '/data.csv')
  .pipe(
    // Transform to object by usging csv-parser
    csv({
      skipLines: 1,
      headers: ['FirstName', 'LastName'],
    })
  )
  .on('data', (data) => results.push(data))
  .on('end', () => {
    // Sort by LastName.
    const sortedByLastName = results.sort((a,b) => a.LastName < b.LastName ? -1 : a.LastName > b.LastName ? 1 : 0)
    // Concat reuslt and print out.
    sortedByLastName.map(v => console.log(v.FirstName + ' ' + v.LastName))
  });