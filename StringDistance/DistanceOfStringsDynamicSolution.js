main();
function main() {
    if(getDistanceBeteweenStringsCall('chip', 'chop') !== 1) throw new Error()
    if(getDistanceBeteweenStringsCall('chip', 'chop2') !== 2) throw new Error()
    if(getDistanceBeteweenStringsCall('chocolate', 'chocolate2') !== 1) throw new Error()
    if(getDistanceBeteweenStringsCall('thou shalt not', 'you should not') !== 5) throw new Error()
}

function getDistanceBeteweenStringsCall(stringOne, stringTwo) {
    let start = new Date()
    let matrix = createMatrix(stringOne, stringTwo)
    let result = matrix[matrix.length - 1][matrix[0].length - 1 ]
    let end = new Date()
    // printMatrix(matrix)
    console.log(`Distance between ${stringOne} and ${stringTwo} is ${result} and took ${end - start} miliseconds and ${checks} steps`)
    return result
}
function createMatrix(stringOne, stringTwo) {
    var matrix = [];
    for(var i=0; i<stringOne.length + 1; i++) {
        matrix[i] = new Array(stringTwo + 1);
    }

    for(let i=0; i< stringOne.length + 1; i++) {
        for(let j=0; j < stringTwo.length + 1; j++) {
            if(i === 0) {
                matrix[i][j] = j
            }
            else if(j === 0) {
                matrix[i][j] = i
            }
            else {
                let minimumValue = getMinimumValue(matrix[i][j-1], matrix[i-1][j-1], matrix[i-1][j])
                matrix[i][j] = minimumValue + matchCost(stringOne[i-1],stringTwo[j-1])
            }
        }
    }
    return matrix
}

function getMinimumValue(val1, val2, val3) {
    if (val1 <= val2 && val1 <= val3) {
        return val1
    } else if (val2 <= val1 && val2 <= val3) {
        return val2
    } else return val3
}

function matchCost(charOne, charTwo) {
    return charOne === charTwo ? 0 : 1
}

function printMatrix(matrix) {
    for(let i =0; i < matrix.length; i++){
        let string= ''
        for(let j =0; j < matrix[i].length; j++){
            string += ' ' + matrix[i][j] + ' '
        }
        console.log(string)
    }
}

