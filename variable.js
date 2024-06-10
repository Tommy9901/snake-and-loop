// bodlogo 1
// const numberOne = 4;
// const numberTwo = 3;
// console.log(numberOne > numberTwo)

// // bodlogo 2
// const numberOne = 4;
// const numberTwo = 3;
// console.log(numberOne < numberTwo)

// bodlogo 3
// const numberOne = 4;
// const numberTwo = 3;
// console.log(numberOne >= numberTwo)

// bodlogo 4
// const numberOne = 4;
// const numberTwo = 3;    
// console.log(numberOne <= numberTwo)

// bodlogo 5
// const numberOne = 4;
// const numberTwo = 3;
// console.log(numberOne == numberTwo)

// bodlogo 6
// const numberOne = 4;
// const numberTwo = 3;
// console.log(numberOne != numberTwo)

// bodlogo 7
// const numberOne = 4;
// const numberTwo = 3;
// console.log(numberOne != numberTwo)

// bodlogo 11
// const numberOne = 4;
// const numberTwo = 3;
// const numberTree = 10;
// const numberfour = 12;
// console.log(numberOne > numberTwo && numberTree < numberfour)

// bodlogo 12
// const numberOne = 4;
// const numberTwo = 3;
// const numberTree = 10;
// const numberfour = 12;
// console.log(numberOne > numberTwo && numberTree > numberfour)

// bodlogo 13
// const numberOne = 4;
// const numberTwo = 3;
// const numberTree = 10;
// const numberfour = 12;
// console.log(numberOne > numberTwo || numberTree < numberfour)

// 14. 4 нь 3-аас их эсвэл 10 нь 12-оос их нь үнэн үү ?
// const numberOne = 4;
// const numberTwo = 3;
// const numberTree = 10;
// const numberfour = 12;
// console.log(numberOne > numberTwo || numberTree > numberfour)

// 15. 4 нь 3-аас бага эсвэл 10 нь 12-оос их нь үнэн үү ?
// const numberOne = 4;
// const numberTwo = 3;
// const numberTree = 10;
// const numberfour = 12;
// console.log(numberOne < numberTwo || numberTree > numberfour)

// 16. let five = !(4 > 3) ямар хариу буцаах вэ ?
// !(4 > 3) true uyd false 

// 17. let six = !(4 < 3) ямар хариу буцаах вэ ?
// !(4 < 3) false uyd true 

// 18. let seven = !(4 > 3 && 10 < 12) ямар хариу буцаах вэ ?
// !(4 > 3 && 10 < 12) true uyd false

// 19. let eight = !(4 > 3 && 10 > 12) ямар хариу буцаах вэ ?
// !(4 > 3 && 10 > 12) false uyd true

// 20. let nine = !(4 === "4") ямар хариу буцаах вэ ?
// !(4 === "4") false uyd true
 
// Part2

// 1. 936-г 12д хуваагаад гарсан хариуг 9д хуваахад гарах үлдэгдлийг хэвлэнэ үү.
// let x = ((936/12)%9)
// console.log(x)

// 2.  Гараас 0-100 хооронд тоон утга авч 90-100-н хооронд байвал true, бусад утгад false буцаа.
// let n = prompt ()
// if (n < 90 || 90 < n < 100 ) {
//     console.log("false")
// }

// else console.log("true")
    




// 3. Он, сараа гараас оруулахад тухайн сар хэд хоногтой болохыг харуул.

// 4. Өгөгдсөн эерэг тоо нь 3 эсвэл 7-ын үржвэр эсэхийг шалгана уу.
// 5. Өгөгдсөн тооны тэгш эсвэл сондгой эсэхийг шалгана уу.
// 6. Өгөгдсөн тооны эерэг тоо эсвэл сөрөг тоо болохыг шалгаад хэвлэж харуулна уу.
// 7. 4 н хувьсагч зарлан тоон утга өг. Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.

// a , b 2 toonii ihiig olood a n ih bol a-g hevle. b n ih bol b-g hevle.
    // let a = prompt();
    // let b = prompt();
    // if ( a > b ) { console.log (a)}
    // else {console.log(b)}

// Ugugdsun 3n toonii ihiig ol?
// let a = prompt()
// let b = prompt()
// let c = prompt()

// if( a > b && a > c) {
//     alert(a)}

// else if( b > a && b > c)
//     {alert (b)}
        
// else { alert (c)}


// 4n toonii ali ihiig n olood 2th toog hevle?
// let a = prompt()
// let b = prompt()
// let c = prompt()
// let d = prompt()
// if (( a > b && a > c && a > d ) && (b > c && b > d)) {
//     alert(b)}
// else if (( b > a && b > c && b > d) && (a > c && a > d)){
//     alert(a)}
// else if (( c > a && c > b && c > d) && (d > a && d > b)) {
//     alert(d)}
// else {alert(c)}


// 2 toonii ihiig ol? /logical opertor ashiglahgu?/
// let a = prompt()
// let b = prompt()
// let c = prompt()
// const result = (Math.max( a, b, c));
// alert (result)


// let a = prompt()
// let b = prompt()
// const result = ((a - b)**2**0.5)
// alert (result)


// tegsh sondgoig ol?
// let n = prompt()
// if ( n%2 == 0 ) { alert(even)}
// else {alert (odd) }


// 3n toog eremble?
// let a = prompt()
// let b = prompt()
// let c = prompt()
// if(( a < b && a < c) && (b < c)) {console.log(a, b, c)}
// else if((a < b && a < c) && (c < b)) {console.log(a, c, b)}
// else if((b < a && b < c) && (a < c)) {console.log(b, a, c)}
// else if((b < a && b < c) && (c < a)) {console.log (b, c, a)}
// else if((c < a && c < b) && (b < a)) {console.log (c, b, a)}
// else { console.log (c, a, b)}


// gurvaljnii 2 tal n medegdej baigaa bol gurvaljnii talbaig ol?
// let a = prompt()
// let b = prompt()
// const result = ((a*b)/2)
// alert (result)


// a toog b toond huvaahad noogdor bolon  uldegdeliin ol?
// let a = prompt()
// let b = prompt()
// const result = ((a/b) )












