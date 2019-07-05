function dayOfProgrammer(year) {
    let day

    if (year === 1918) {
        return '26.09.1918'
    }
    if (year < 1918 && year % 4 === 0) {
        day = 256 - 244
        return day+'.09.'+year
    }

    if (year > 1918 && year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        day = 256 - 244
        return day + '.09.' + year
    }
    if ( year % 4 !== 0 || year % 400 === 0 && year % 100 === 0) {
        day = 256 - 243
        return day + '.09.' + year
    }
    if ( year % 4 === 0 && year % 100 === 0) {
        day = 256 - 243
        return day + '.09.' + year
    }
}
