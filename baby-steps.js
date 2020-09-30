


//write a program that accepts one or more numbers as cmd line arguments
sumNumbers = 0 ;
    for (let index = 2; index < process.argv.length; index++) {
        const element = process.argv[index];
        // console.log(element)
        sum = parseInt(element,10)
        sumNumbers += sum
    }
    
    
console.log(sumNumbers)
//print the sum of the numbers to the console
// console.log(sumNum())

