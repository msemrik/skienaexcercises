main();

function main() {
    let stringOne = 'chocolate';
    let stringTwo = 'chips';

    let correctShuffle = 'cchocohilaptes'
    isCorrectShuffleCall(stringOne, stringTwo, correctShuffle)


    let generatedCombination = stringGenerator()
    stringOne = generatedCombination[0];
    stringTwo = generatedCombination[1];
    correctShuffle = generatedCombination[2];
    isCorrectShuffleCall(stringOne, stringTwo, correctShuffle)
}

function isCorrectShuffleCall(stringOne, stringTwo, shuffledStringToTest) {
    console.log(`StringOne length: ${stringOne.length}. StringTwo length: ${stringTwo.length}`)
    let start = new Date()
    const matrix = createMatrix(stringOne, stringTwo, shuffledStringToTest)
    let end = new Date()
    console.log(`Word ${shuffledStringToTest} is ${matrix[matrix.length-1][matrix[0].length-1] ? '' : 'not'} a shuffle version of ${stringOne} + ${stringTwo}. Took ${end-start} miliseconds`)
}

function createMatrix(stringOne, stringTwo, shuffledStringToTest) {
    var matrix = [];
    for(var i=0; i<stringOne.length + 1; i++) {
        matrix[i] = new Array(stringTwo.length + 1);
    }

    for(let i=0; i< stringOne.length + 1; i++) {
        for(let j=0; j < stringTwo.length + 1; j++) {
            if(i === 0 && j === 0) {
                matrix[i][j] = false
                continue
            }
            if(i === 0) {
                if(shuffledStringToTest[i+j-1] === stringTwo[j-1]) {
                    matrix[i][j] = true
                } else {
                    matrix[i][j] = false
                    continue
                }
            }
            else if(j === 0) {
                if(shuffledStringToTest[i+j-1] === stringOne[i-1]) {
                    matrix[i][j] = true
                } else {
                    matrix[i][j] = false
                    continue
                }
            }
            else {
                if(matrix[i][j-1] || matrix[i-1][j]) {
                    if(shuffledStringToTest[i+j-1] === stringOne[i-1] || shuffledStringToTest[i+j-1] === stringTwo[j-1]) {
                        matrix[i][j] = true
                        continue
                    }
                }
            }
        }
    }
    return matrix
}

function printMatrix(matrix) {
    for(let i =0; i < matrix.length; i++){
        let string= ''
        for(let j =0; j < matrix[i].length; j++){
            string += ' ' + (matrix[i][j]? ' true': 'false') + ' '
        }
        console.log(string)
    }
}

function stringGenerator() {
    let generatedString = ''
    let originalFirstString = 'aaaaaaaaaaaaaaaaassssssssssssssssddddddddddaaaaaaaaaaaaaaasdasdasdasdasdasdasdasdasdasdasdasdsdadasdasdasdasdasdasdasd'
    let originalSecondString = 'aaaaaaaaaaaaaasssssssssssssssssddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasd'
    let firstString = originalFirstString.substring(0)
    let secondString = originalSecondString.substring(0)
    while (firstString.length > 0 || secondString.length > 0) {
        if (firstString.length === 0) {
            generatedString += secondString.charAt(0)
            secondString = secondString.substring(1)
            continue
        }

        if (secondString.length === 0) {
            generatedString += firstString.charAt(0)
            firstString = firstString.substring(1)
            continue
        }

        if (Math.floor(Math.random() * 2) === 0) {
            generatedString += firstString.charAt(0)
            firstString = firstString.substring(1)
            continue
        } else {
            generatedString += secondString.charAt(0)
            secondString = secondString.substring(1)
            continue
        }
    }
    // console.log(originalFirstString)
    // console.log(originalSecondString)
    // console.log(generatedString)
    return [originalFirstString, originalSecondString, generatedString]
}


