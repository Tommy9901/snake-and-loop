/* 1. Нэг хувьсагч зарлан тухайн хувьсагчийн утга 1 бол 'Даваа', 2 бол 'Мягмар', .., 7 бол 'Ням'-г буцаах бөгөөд 
1-7-с ялгаатай тоон утга оруулсан тохиолдолд 'Таны оруулсан утга алдаатай байна' гэсэн текст харуул.*/
// let n = prompt();
// if (n == 1) {
//   alert(Даваа);
// } else if (n == 2) {
//   alert(Мягмар);
// } else if (n == 3) {
//   alert = Лхагва;
// } else if (n == 4) {
//   alert = Пүрэв;
// } else if (n == 5) {
//   alert = Баасан;
// } else if (n == 6) {
//   alert = Бямба;
// } else if (n == 7) {
//   alert = Ням;
// } else {
//   null;
// }

// 2. Гараас дүнгээ оруулах үед (1-100-ийн хооронд) тохирох үсгэн үнэлгээг буцаа. /A,B,C,D,F/

// let n = 70
// if (100 >= n &&  n >= 90) {
//   console.log("A");
// } else if (90 > n && n >= 80) {
//   console.log("B");
// } else if (80 > n && n >= 70) {
//   console.log("C");
// } else if (70 > n && n >= 60) {
//   console.log("D");
// } else if  (60 > n) {
//   console.log("F");
// }

/* 3. Хэрэв гараас оруулсан username нь 'admin' байвал 'Hello, Admin!', өөр username байх тохиолдолд 
'Hello, ...!' цэгийн оронд тухайн хэрэглэгчийн username-г харуул.*/
// let username = 'admin'

// if (username == 'admin'){
//     console.log ('Hello ${admin}')
// }
// else {('Hellon ')}



/*4. Гараас оруулсан password зөвхөн 'password123' байх үед хэрэглэгч амжилттай нэвтрэх бөгөөд нэвтэрсэн тохиолдолд 
'Access granted!' гэж харуул. Хэрэв password алдаатай бол 'Enter the password:' гэсэн текстийг дахин харуул.*/
// let password = prompt("Enter password")

// while (password != "1234"){
//     password = ("wrong password, please try again");
// }
// alert("Access granted")



// 5. 'Hello World' гэсэн текстийг 5 удаа хэвлэ.
// let num = 1;
// while (num <= 5) {
//     console.log(num);
//     console.log('Hello world');
//     num = num + 1;
// }

// 6. 1-20 хүртэл тоог хэвлэж харуул.
// let num = 1
// while (num <= 20) {
//     console.log(num);
//     num = num + 1;
// }







// 1. 1-20 хүртэл тооны нийлбэрийг ол.
// let num = 0;
// let total = 0;

// while (num <= 20) {
//     total = total + num;
//     num = num + 1;
// }
// console.log(total);









/* 2. password нь 'pass1234' байх бөгөөд буруу хийх 3 удаагийн боломж л байна.
Зөв байх тохиолдолд 'Access granted!' гэж харагдах бол буруу оруулсан тохиолдолд 'Enter your password: ' гэж гарч ирнэ. 
Харин 3 удаа буруу оруулсан тохиолдолд 'Access denied!' гэж харагдана.*/
// #Old
// let password =prompt()

// if (password != "password123"){
//     console.log("Enter the password:");
// }

// else { 
//     console.log("Access granted!")
// }

// while (password != "password123") {
//     console.log("Enter the password:")
// }


// #while
// let password = prompt("Enter password")

// while (password != "1234"){
//     password = ("wrong password, please try again");
// }
// alert("Access granted")




//3. Fibonacci sequence эхний 10 тоог хэвлэ.