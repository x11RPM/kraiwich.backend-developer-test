// Fetch data from data.json file.
const saleData = require('./data')

// Calculation: different between sale price and cost price multiply by total sold.
calulateTotalSoldProfit = data => Math.ceil((data.sell_price - data.cost_price) * data.inventory)

for(let data of saleData) {
  const result = calulateTotalSoldProfit(data)
  console.log(result)
}