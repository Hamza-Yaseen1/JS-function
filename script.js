function even() {
    let a = prompt("What do you want to print? Even or Odd ");
    let n = parseInt(prompt("How many " + a + " numbers do you want to print?"));
    let b;

    if (a.toLowerCase() === "even") {
        for (b = 0; b <= n; b = b + 2) {
            console.log(b + " ");
        }
    } else if (a.toLowerCase() === "odd") {
        for (b = 1; b <= n; b = b + 2) {
            console.log(b + " ");
        }
    }
}
// X-------Division--------------X
function division() {
   
    let num = Number(prompt("Enter the numerator: "));
    let denom = Number(prompt("Enter the denominator: "));

    while ((num == 0 && denom != 0) || (denom == 0 && num != 0)) {
        alert('Error! Division by Zero is not allowed');
        num = Number(prompt("Enter the numerator: "));
        denom = Number(prompt("Enter the denominator: "));
    }
    let quo = Math.floor(num/denom);                    
    
    console.log(`The quotient of ${num} divided by ${denom} is ${quo}.<br>`);  

}