// Pattern size based on the required output (5 rows)
const PATTERN_SIZE = 5;

function factorial(n) {
    if (n < 0) return null;
    if (n === 0 || n === 1) return 1;

    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i;
    }
    return res;
}

function nCr(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

for (let i = 0; i < PATTERN_SIZE; i++) {
    let row = "";

    for (let s = 0; s < i; s++) {
        row += " ";
    }

    let n = PATTERN_SIZE - 1 - i;

    for (let j = 0; j <= n; j++) {
        row += nCr(n, j) + " ";
    }

    console.log(row.trim());
}
