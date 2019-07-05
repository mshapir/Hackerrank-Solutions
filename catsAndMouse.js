function catAndMouse(x, y, z) {
    let distanceFromCatAToMouse = Math.abs(z - x)
    let distanceFromCatBToMouse = Math.abs(z - y)
    if (distanceFromCatAToMouse === distanceFromCatBToMouse) {
        return 'Mouse C'
    }
    if (distanceFromCatAToMouse < distanceFromCatBToMouse) {
        return 'Cat A'
    } else {
        return 'Cat B'
    }
}
