/*
    - + unary plus [return number if its not number]
    - - unary negation [return number if its not number + negates it]
    tests
    - normal number
    - string number
    - string negative number
    - string text 
    - flout
    - hexadecimal numerul system => 0xFF
    - null
    - false 
    - true
*/

console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"saif");
console.log(+"15.5");
console.log(+0xFF);
console.log(+null);
console.log(+false);
console.log(+true);

console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"saif");
console.log(-"15.5");
console.log(-0xFF);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(number("100"))