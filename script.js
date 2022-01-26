

function Calc ( a, b, operator ) {

    if( typeof a != 'number' || typeof b != 'number') {
        return 'Error'
    } 

    if ( operator === 'sum') {
        return a + b
    } else if ( operator === 'dif') {
        return a - b
    } else if (operator === 'multi') {
        return a * b
    } else if ( operator === 'div') {
        return a / b
    }
}
console.log(Calc( 2,2,'sum' )) // сложение 
console.log(Calc( 1,14,'dif' )) // вычитание difference
console.log(Calc( 2,14,'multi' )) // умножение multiplication
console.log(Calc( 15,5,'div' )) // деление division












