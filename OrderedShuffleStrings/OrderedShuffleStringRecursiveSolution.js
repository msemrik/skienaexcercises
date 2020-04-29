checks = 0

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
    const result = isCorrectShuffle(stringOne, stringTwo, shuffledStringToTest)
    let end = new Date()
    console.log(`Word ${shuffledStringToTest} is${result ? '' : ' not'} a shuffle version of ${stringOne} + ${stringTwo}. Took ${end-start} miliseconds`)
    console.log('Number of steps: ' + checks)
}

function isCorrectShuffle(stringOne, stringTwo, shuffledStringToTest) {
    checks++
    if ((stringOne.length + stringTwo.length) !== shuffledStringToTest.length) {
        return false;
    } else if (shuffledStringToTest.length === 0) {
        return true;
    }

    for (let i = 0; i < shuffledStringToTest.length; i++) {
        if (stringOne.length > 0 && stringOne.charAt(0) === shuffledStringToTest.charAt(0)) {
            if (isCorrectShuffle(stringOne.substring(1, stringOne.length), stringTwo, shuffledStringToTest.substring(1, shuffledStringToTest.length)))
                return true
        }

        if (stringTwo.length > 0 && stringTwo.charAt(0) === shuffledStringToTest.charAt(0)) {
            return isCorrectShuffle(stringOne, stringTwo.substring(1, stringTwo.length), shuffledStringToTest.substring(1, shuffledStringToTest.length))
        }
    }

    return false
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