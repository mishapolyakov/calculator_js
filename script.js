function Calc(num1, num2, operator) {
    
    if ( typeof num1 !== "number" || typeof num2 !== "number") {
        return "this is not a number"
    }
    if( num2 === 0 && operator === 'div') {
        return "fatal error"
    }
    if ( operator !== "sum" && operator !== 'sub' && operator !== 'mult' && operator !== 'div' ) {
        return "unknow operator"
    }

    if(operator === "sum") {
        return num1 + num2
    } else if(operator === "sub") {
        return num1 - num2
    } else if(operator === "mult") {
        return num1 * num2
    } else if(operator === "div") {
        return num1 / num2
    }
}

console.log(Calc(4,5,"sum"))
console.log(Calc(4,5,"sub"))
console.log(Calc(4,5,"mult"))
console.log(Calc(4,5,"div"))
console.log(Calc(4,0,"div"))
console.log(Calc(4,5,"+"))
console.log(Calc(4,"fff","mult"))












