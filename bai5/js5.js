let n = 20
let a = 0;
let b = 1;
let c;
let d = 0;

for (let i = 0; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
    d += c;
    document.write(`${c} <br>`);
}
alert(d);


