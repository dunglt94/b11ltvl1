// let n = +prompt('Nhập số:');
let n = 30
let count = 0;
let total = 0;
let i = 7;
// for (let i = 7; i % 7 === 0; i += 7) {
//     count++;
//     if (count <= n) {
//         total += i;
//     } else {
//         break;
//     }
// }
while (count < n) {
    if (i % 7 == 0) {
        total += i;
        count++;
    }
    i++;
}
alert(total);