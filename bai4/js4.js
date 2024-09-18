let n = +prompt('Nhập n số trong dãy fibonacci đầu tiên:')
let a = 0;
let b = 1;
let c;

while (n < 4) {
       n = +prompt("Không có số nào chia hết cho 5. Nhập lại:");
    }
for (let i = 0; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
    if (c % 5 === 0) {
        alert(c);
        // document.write(`${c} <br>`);
        break;
    }
}


