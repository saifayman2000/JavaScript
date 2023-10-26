// Add Variables Here
var number_one = 10
var number_two = 20
// Ouput
console.log(number_one * number_one * number_one + number_two); // Normal Concatenate => 1020
console.log( typeof(number_one + " " + number_two)); // Normal Concatenate => String
console.log(`${number_one}${number_two}`); // Template Literals Way => 1020
console.log(typeof`${number_one} ${number_two}`); // Template Literals Way => String

console.log(number_two + "\n" + number_one);
/*
    Normal Concatenate
    20
    10
*/

console.log(`${number_two}
${number_one}`);
/*
    Template Literals Way
    20
    10
*/

