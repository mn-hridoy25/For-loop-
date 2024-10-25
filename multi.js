// Multiplication Table:
// Write a program to print the multiplication table of a given number n from 1 to 10.


// Solve:-

var n = Number("10");

if (isNaN(n)) {
    console.log("Please input a number");
}
else {
    for (let i = 1; i <= 10; i++) {
        // console.log(i);
        ans = n * i;
        // console.log(ans);
        let mul = (`${n}*${i}= ${ans}`);
        console.log(mul);
    }
}
