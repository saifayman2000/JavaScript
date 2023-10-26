/*
    Number
    - double precision
    - syntactic sugar "_"
    - e
    - **
    - with decimal
    - number + bigint
    - number min value
    - number max value
*/

/*
console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6 );
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 23434343434);
*/

/*
    number methods
    - two dots to call a methods
    - toString()
    - toFixed()
    - parsrInt()
    - parsrFloat()
    - isInteger() [ES6]
    - isNaN() [ES6]
*/


console.log((100).toString());
console.log(100.10.toString());

console.log(100.554555.toFixed(2));

console.log(Number("100  osama"));
console.log(+"100 osama");
console.log(parseInt("100 osama"));
console.log(parseInt("osama 100 osama"));
console.log(parseInt(100.500));
console.log(parseFloat(100.500));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.500));
console.log(Number.isInteger(100));

console.log(Number.isNaN("osama" / 20));


/*
    math object
    - round()
    - ceil()
    - floor()
    - min()
    - max()
    - pow()
    - random()
    - trunc() [ES6]
*/

// console.log(Math.round(99.2))
// console.log(Math.round(99.5))

// console.log(Math.ceil(99.1))
// console.log(Math.floor(99.9))

// console.log(Math.min(10, 20, 100, -100, 90))
// console.log(Math.max(10, 20, 100, -100, 90))

// console.log(Math.pow(2, 4))

// console.log(Math.random())

// console.log(Math.trunc(99.5))