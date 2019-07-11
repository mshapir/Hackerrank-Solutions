function maximumToys(prices, k) {
    let numberOfToys = 0
    let budget = k
    prices.sort((a, b) => a > b ? 1 : b > a ? -1 : 0)
    for (var i = 0; i < prices.length; i++){
        if (budget > prices[i]) {
            budget -= prices[i]
            numberOfToys += 1
        }
    }
return numberOfToys

}
