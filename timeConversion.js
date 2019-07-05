function timeConversion(s) {
    let time
    s = s.split(':')
    if (s[0].includes('12') && s[2].includes('PM')) {
        time = s[0] + ':' + s[1] + ':' + s[2].replace('PM', '')
    } else if (s[2].includes('PM')) {
        time = 12 + parseInt(s[0], 10) + ':' + s[1] + ':' + s[2].replace('PM', '')
    } else if(s[0].includes('12') && s[2].includes('AM')) {
        time = 12 - parseInt(s[0], 10) + '0' + ':' + s[1] + ':' + s[2].replace('AM', '')
    } else {
        time = s[0] + ':' + s[1] + ':' + s[2].replace('AM', '')
    }
    return time
}
