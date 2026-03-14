let n = 5;

for (let i = 0; i < n; i++) {
    let row = "";

    for (let s = 0; s < i; s++) row += " ";

    let left = n - i;
    for (let j = 0; j < left; j++) {
        row += (j === 0 || j === left - 1) ? "1 " : (left - j) + " ";
    }

    for (let j = 1; j < left - 1; j++) {
        row += (j + 1) + " ";
    }

    console.log(row.trim());
}
