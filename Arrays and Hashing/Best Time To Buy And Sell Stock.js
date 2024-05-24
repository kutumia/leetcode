var maxProfit = function(prices) {
    let minPrice = prices[0]; // initialize the minimum price to the first element
    let maxProfit = 0; // initialize the maximum profit to zero
    for(value of prices){
        minPrice = Math.min(minPrice, value); // update the minimum price if a lower price is found
        maxProfit = Math.max(maxProfit, value - minPrice); // update the maximum profit if a higher profit is found
    }
    return maxProfit; // return the maximum profit
};