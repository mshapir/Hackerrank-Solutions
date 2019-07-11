function countSwaps(a) {
    let numberOfswaps = 0
    let current
    for (var j = 0; j < a.length; j++) {
        for (var i = 0; i <= a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                current = a[i]
                a[i] = a[i + 1]
                a[i + 1] = current
                numberOfswaps += 1
            }
        }
    }
    console.log(`Array is sorted in ${numberOfswaps} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[a.length -1]}`)
}
