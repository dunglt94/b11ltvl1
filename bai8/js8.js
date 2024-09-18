function game() {
    let num_from = +prompt('Chọn 1 khoảng từ số:');
    let num_to = +prompt('Đến số:');
    let RNG_num = Math.round(Math.random() * (num_to - num_from)) + num_from;
    let guess_num = +prompt('Đoán 1 số ngẫu nhiên trong khoảng đã chọn');
    let count = 0;
    while (count < 3) {
        if (guess_num < RNG_num) {
            guess_num = +prompt('Số đã chọn nhỏ hơn mục tiêu. Nhập lại:');
        } else if (guess_num > RNG_num) {
            guess_num = +prompt('Số đã chọn lớn hơn mục tiêu. Nhập lại:');
        } else if (guess_num == RNG_num) {
            alert('Chúc mừng bạn đã đoán đúng.')
            break;
        }
        count++;
    }
    alert('Trò chơi kết thúc');
}
