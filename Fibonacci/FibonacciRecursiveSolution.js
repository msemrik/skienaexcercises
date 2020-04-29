main();
function main() {
    if(getFibonacciForValueWithRecursiveImplementationCall(0) !== 0) throw new Error()
    if(getFibonacciForValueWithRecursiveImplementationCall(1) !== 1) throw new Error()
    if(getFibonacciForValueWithRecursiveImplementationCall(2) !== 1) throw new Error()
    if(getFibonacciForValueWithRecursiveImplementationCall(3) !== 2) throw new Error()
    if(getFibonacciForValueWithRecursiveImplementationCall(4) !== 3) throw new Error()
    if(getFibonacciForValueWithRecursiveImplementationCall(5) !== 5) throw new Error()
    if(getFibonacciForValueWithRecursiveImplementationCall(10) !== 55) throw new Error()
    if(getFibonacciForValueWithRecursiveImplementationCall(20) !== 6765) throw new Error()
    if(getFibonacciForValueWithRecursiveImplementationCall(50) !== 12586269025) throw new Error()
}

function getFibonacciForValueWithRecursiveImplementationCall(N) {
    let start = new Date()
    const result = getFibonacciForValueWithRecursiveImplementation(N)
    let end = new Date()
    console.log(`Fibonacci of ${N} is ${result} and took ${end - start} miliseconds`)
    return result
}

function getFibonacciForValueWithRecursiveImplementation(N) {
    if(N === 0) return 0
    if(N === 1) return 1

    return getFibonacciForValueWithRecursiveImplementation(N - 1) + getFibonacciForValueWithRecursiveImplementation(N - 2)
}