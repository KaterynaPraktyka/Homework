let str = "Katia";
let value = "tia";

function find(input, searchValue) {
    let res = input.indexOf(searchValue);
    if (res >= 0) {
        console.log("found");
    } else {
        console.log("not found");
    }
}

find(str, value);