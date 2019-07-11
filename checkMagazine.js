function checkMagazine(magazine, note) {
    let includes = true;
    note.forEach(word => {
        if (!magazine.includes(word)) {
            includes = false;
        } else {
            magazine.splice(magazine.indexOf(word), 1);
        }
    });
    if (includes)
        console.log('Yes');
    else
        console.log('No');
}
