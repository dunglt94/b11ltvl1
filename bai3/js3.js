let n = +prompt('Nhập n số trong dãy fibonacci đầu tiên:')
// let fibonacci ='';
let a = 0;
let b = 1;
let c;
for (let i = 0; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
        // fibonacci = c;
        document.write(`${c} <br>`);
}