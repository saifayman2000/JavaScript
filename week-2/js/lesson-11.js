/*
    template literals (template strings)
*/

// let a = "naruto";
// let b = "minato";
// let c = "php";
// let d = "javascript";

// console.log(a + "\"\" " + b + 
// "\n" + c + " " + d)

// console.log(`${a} "" '' \\ ${b} 
// ${c} ${d} `)

let title = "elzero";
let desc = "elzero web school";

let markUp = `
    <div class= " card">
        <div class= "child">
            <h2>${title}</h2>
            <p>${desk}</p>
        </div>
    </div>
`;

document.write(markUp);