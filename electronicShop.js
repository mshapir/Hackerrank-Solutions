function getMoneySpent(keyboards, drives, b) {
    let total = 0
        keyboards.forEach(key => {
            drives.forEach(drive => {
                if (key + drive > total && key + drive <= b) {
                    total = key + drive
                }
           } )
        })
    if (total === 0) {
          return -1
    } else {
           return total
       }
}
