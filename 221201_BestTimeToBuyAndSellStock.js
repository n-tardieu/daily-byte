// Best Time to Buy and Sell Stock
// Given an array of integers where the ith integer represents the price of the stock on day i, 
// return the largest possible profit from completing one transaction (i.e. buying 1 share and selling 1 share).
// Examples: Given the following prices...

// // Buy on day 1 and sell on day 5 for a profit of 5 - 1 = 4. 
// prices = [1, 2, 3, 4, 5], return 4. 
// // Buy on day 4 and sell on day 9 for a profit of 11 - 1 = 10. 
// prices = [4, 5, 2, 1, 6, 10, 4, 9, 11], return 10. 
// // Buying and selling the stock at any point would yield a negative profit. 
// prices = [33, 18, 8, 2], return 0 

const prices = [4, 5, 2, 1, 6, 10, 4, 9, 11]

const bestTimeToBuyAndSellStock = (prices) => {
    let bestBuy = 0
    prices.forEach((priceBuying, indexDayBuying) => {
        prices.forEach((priceSelling, indexDaySelling) => {
            if (indexDayBuying < indexDaySelling) {
                const profit = priceSelling - priceBuying
                if (profit > bestBuy) bestBuy = profit
            }
        })
    });
    return bestBuy
}

console.log("__bestTimeToBuyAndSellStock__");
console.log("return : ", bestTimeToBuyAndSellStock(prices));