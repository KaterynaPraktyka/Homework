
function sort(x, y, z) {
    let items = [];
    if (x >= y && x >= z) {
        items[0] = x;
        if (y >= z) {
            items[1] = y;
            items[2] = z;
        } else {
            items[1] = z;
            items[2] = y;
        }
    }
    else if (y >= x && y >= z) {
        items[0] = y;
        if (x >= z) {
            items[1] = x;
            items[2] = z;
        } else {
            items[1] = z;
            items[2] = x;
        }
    } else {
        items[0] = z;
        if (x >= y) {
            items[1] = x;
            items[2] = y;
        } else {
            items[1] = y;
            items[2] = x;
        }
    }
    return items;
}

let sortedItems = sort(1,2,8);
