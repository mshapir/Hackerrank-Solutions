function alternatingCharacters(s) {
    let deleted = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            deleted++;
        }
    }
    return deleted;
}
