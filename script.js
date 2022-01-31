function Calc ( a, b, operator ) {

    if( typeof a != 'number' || typeof b != 'number' ) {
        return 'Error'
    } 

    if ( operator === 'sum' ) {
        return a + b
    } else if ( operator === 'dif' ) {
        return a - b
    } else if (operator === 'multi' ) {
        return a * b
    } else if ( operator === 'div' ) {
        return a / b
    }
}
console.log(Calc( 231,2,'sum' ))
console.log(Calc( 13,14,'dif' ))
console.log(Calc( 2,14,'multi' ))
console.log(Calc( 1,5,'div' ))












