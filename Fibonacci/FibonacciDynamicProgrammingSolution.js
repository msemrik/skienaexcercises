main();
function main() {
    if(getFibonacciForValueWithDynamicProgrammingCall(0) !== 0) throw new Error()
    if(getFibonacciForValueWithDynamicProgrammingCall(1) !== 1) throw new Error()
    if(getFibonacciForValueWithDynamicProgrammingCall(2) !== 1) throw new Error()
    if(getFibonacciForValueWithDynamicProgrammingCall(3) !== 2) throw new Error()
    if(getFibonacciForValueWithDynamicProgrammingCall(4) !== 3) throw new Error()
    if(getFibonacciForValueWithDynamicProgrammingCall(5) !== 5) throw new Error()
    if(getFibonacciForValueWithDynamicProgrammingCall(10) !== 55) throw new Error()
    if(getFibonacciForValueWithDynamicProgrammingCall(20) !== 6765) throw new Error()
    if(getFibonacciForValueWithDynamicProgrammingCall(50) !== 12586269025) throw new Error()
}

function getFibonacciForValueWithDynamicProgrammingCall(N) {
    let start = new Date()
    const result = getFibonacciForValueWithDynamicProgramming(N)
    printArray(result)
    let end = new Date()
    console.log(`Fibonacci of ${N} is ${result[N]} and took ${end - start} miliseconds`)
    return result[N]
}

function getFibonacciForValueWithDynamicProgramming(N) {
    let array = [0, 1]
    for(let i=2;i<=N;i++){
        array[i] = (array[i-1]) + (array[i-2])
    }
    return array
}

function printArray(result) {
    let string = ''

    for(let i=0;i<result.length;i++){
        string += result[i] + ';'
    }

    console.log(string)
}