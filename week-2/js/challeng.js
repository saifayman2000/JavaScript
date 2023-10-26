


var main_title = "Elzero", main_desc = "Elzero Web School", main_date = "17/10"

var main_div = `
    <div>
        <h3>Hello ${ main_title}</h3>
        <p>${main_desc}</p>
        <span>${main_date}</span>
    </div>
`
var result = main_div.repeat(4);
document.write(result)
