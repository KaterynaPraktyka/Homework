function join(arr) {
    let a = "";
    for (let i = 0; i < arr.length; i++) {
        a = a + arr[i];
    }
    return a;
}
console.log(join([1, 2, 3]));
