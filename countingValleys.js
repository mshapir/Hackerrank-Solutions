function countingValleys(n, s) {
    s = [...s]
    let seaLevel = 0
    let vallies = 0
    s.forEach(char => {
        char === 'U' ? seaLevel++ : seaLevel--
        if (seaLevel === 0 && char === 'U') {
            vallies++
        }
        })
    return vallies

}
