main();

function main() {
    if(getDistanceBeteweenStringsCall('chip', 'chop') !== 1) throw new Error()
    if(getDistanceBeteweenStringsCall('chip', 'chop2') !== 2) throw new Error()
    if(getDistanceBeteweenStringsCall('hhhjj', 'sssssaa') !== 7) throw new Error()
    if(getDistanceBeteweenStringsCall('chocolate', 'chocolate2') !== 1) throw new Error()
    if(getDistanceBeteweenStringsCall('thou shalt not', 'you should not') !== 5) throw new Error()
}

function getDistanceBeteweenStringsCall(stringOne, stringTwo) {
    let start = new Date()
    const result = getDistanceBeteweenStrings(stringOne, stringTwo, stringOne.length, stringTwo.length)
    let end = new Date()
    console.log(`Distance between ${stringOne} and ${stringTwo} is ${result} and took ${end - start} miliseconds and ${checks} steps`)
    return result
}

function getDistanceBeteweenStrings(stringOne, stringTwo, i, j) {
    checks++
    if (i === 0) return j * 1
    if (j === 0) return i * 1

    let distance = []
    distance[0] = getDistanceBeteweenStrings(stringOne, stringTwo, i, j - 1) + 1
    distance[1] = getDistanceBeteweenStrings(stringOne, stringTwo, i - 1, j) + 1
    distance[2] = getDistanceBeteweenStrings(stringOne, stringTwo, i - 1, j - 1) + matchCost(stringOne[i-1], stringTwo[j-1])

    maxDistance = stringOne.length >= stringTwo.length ? stringOne.length : stringTwo.length
    if(distance[0] > maxDistance && distance[1] > maxDistance && distance[2] > maxDistance) {
        throw new Error()
    }

    if (distance[0] <= distance[1] && distance[0] <= distance[2]) {
        return distance[0]
    } else if (distance[1] <= distance[0] && distance[1] <= distance[2]) {
        return distance[1]
    } else return distance[2]
}

function matchCost(charOne, charTwo) {
    return charOne === charTwo ? 0 : 1
}

