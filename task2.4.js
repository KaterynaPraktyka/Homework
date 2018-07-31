let first = 5;
let second = 3;

function max(x, y) {
    if (x > y) {
        console.log(x);
    }
    else if (x === y) {
        console.log("these numbers are equal")
    } else {
        console.log(y);
    }
}

max(first, second);