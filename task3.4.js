function Rectangle(x, y) {
    this.getArea = function () {
        return x *y;
    };

    this.getPerimter = function () {
        return x *2 + y * 2;
    };
}

let rec = new Rectangle(3,4);
console.log(rec.getArea());
console.log(rec.getPerimter());