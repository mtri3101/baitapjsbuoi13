//Bài tập 1: Tính tiền lương
/*
input: số ngày làm, lương 1 ngày
output: tiền lương
process: dom tới input lấy giá trị user * lương 1 ngày = tiền lương, dom tới thẻ trả kết quả
*/

document.getElementById('btn1').onclick = function(){
    var workingDays = +document.getElementById('inputBT1').value;
    var salary = workingDays * 100000;
    document.getElementById('resBT1').innerHTML = 'Tiền lương là: '+ salary.toLocaleString();
}

//Bài tập 2: Tính trung bình
/*
input: số thứ 1, 2, 3, 4, 5
output: giá trị trung bình
process:
    1.dom lấy giá trị input số 1 2 3 4 5
    2.Giá trị trung bình = (giá trị số 1 + 2 + 3 + 4 + 5)/5
    3.dom đến thẻ trả kết quả = giá trị trung bình
*/

document.getElementById('btn2').onclick = function(){
    var num1 = +document.getElementById('input1BT2').value;
    var num2 = +document.getElementById('input2BT2').value;
    var num3 = +document.getElementById('input3BT2').value;
    var num4 = +document.getElementById('input4BT2').value;
    var num5 = +document.getElementById('input5BT2').value;
    var avrNum = (num1 + num2 + num3 + num4 + num5)/5;
    document.getElementById('resBT2').innerHTML = 'Giá trị trung bình là: '+ avrNum;
}


//Bài tập 3: Quy đổi tiền
/*
input: số tiền; tỉ giá
output: tiền quy đổi
process: 
    1. dom đến thẻ input lấy giá trị nhập vào
    2. tiền quy đổi = số tiền * tỉ giá
    3. dom đến thẻ trả kết quả =  tiền quy đổi
*/

document.getElementById('btn3').onclick = function(){
    var usd = +document.getElementById('inputBT3').value;
    var exchangeMoney = usd * 23500;
    document.getElementById('resBT3').innerHTML = 'Tiền quy đổi là: '+ exchangeMoney.toLocaleString()+ ' vnd';
}

//Bài tập 4: Tính diện tích, chu vi
/*
input: chiều dài, chiều rộng
output: diện tích, chu vi
process: 
    1. dom đến thẻ input lấy giá trị chiều dài chiều rộng
    2. chu vi = (chiều dài + chiều rộng)*2
    3. diện tích = chiều dài * chiều rộng
    4. dom đến thẻ trả kết quả
*/

document.getElementById('btn4').onclick = function(){
    var length = +document.getElementById('length').value;
    var width = +document.getElementById('width').value;
    var perimeter = (length + width)*2;
    var area = length * width;
    document.getElementById('resBT4').innerHTML = 'Chu vi hình chữ nhật là: '+ perimeter + '</br>' + 'Diện tích hình chữ nhật là: ' + area;
}

//Bài tập 5: Tính tổng 2 ký số
/*
input: số 2 chữ số;
output: tổng 2 ký số;
process: 
    1. dom đến input lấy giá trị 
    2. kiểm tra giá trị, nếu ko phải số 2 chữ số => alert: yêu cầu nhập số 2 chữ số
    3. hàng chục = Math.floor(input/10);
    4. hàng dv = input % 10
    5. Tổng ký số = hàng chục + hàng dv
    6. dom đến kết quả = tổng ký số
*/

document.getElementById('btn5').onclick = function(){
    var number = +document.getElementById('inputBT5').value;
    if (number <10 || number >= 100){
        alert('Hãy nhập số có 2 chữ số');
    }
    var tensNumber = Math.floor(number/10);
    var unitNumber = (number % 10);
    var total = tensNumber + unitNumber;
    document.getElementById('resBT5').innerHTML = 'Tổng 2 ký số của ' + number + ' là: ' + total;
}