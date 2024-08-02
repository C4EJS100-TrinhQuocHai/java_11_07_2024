/* 
1. câu điều kiện if
*/
let a = 4;

if (a > 5) {
    /* nếu điều kiện thỏa mãn thì thân chạy */
    console.log("đúng");
}
console.log("1");
/* 
    viết chương trình cho người dùng nhập vào số tuổi
    nếu lớn hơn 18 tuổi thì báo bạn đủ tuổi xem phim
    else thì báo là bạn không đủ tuổi xem phim!
 */
/* let age= Number(prompt("mời bạn nhập tuổi!"));
    if(age>=18){
        console.log("bạn đủ tuổi xem phim!");
    }else{
        console.log("bạn không đủ tuổi xem phim!");
    } */
// if(){
// //
// }else if(){
// //
// }else if(){
// //
// }else{
// //
// }
//     if(){
//         //
//     }
//     if(){
//         //
//     }
//     if(){

//     }else{

//     }
/* 
    viết chương trình cho người dùng nhập vào 1 ngày bất kì trong
    tuần, in ra thứ 
 */
// let day = +prompt("mời nhập số!");
// if (day == 2) {
//     console.log("đây là thứ 2!");
// } else if (day == 3) {
//     console.log("đây là thứ 3");
// } else if (day == 4) {
//     console.log("đây là thứ 4");
// } else if (day == 5) {
//     console.log("đây là thứ 5");
// } else if (day == 6) {
//     console.log("đây là thứ 6");
// } else if (day == 7) {
//     console.log("đây là thứ 7");
// } else if (day == 8) {
//     console.log("đây là chủ nhật");
// }else{
//     console.log("số bạn chọn không thỏa mãn!");
// }

    // if(){
    //     // logic
    //     if(){
    //         // logic
    //     }else{
    //         // logic
    //     }
    // }else{

    // }
    /* viết chương trình cho người dùng nhập vào 1 số 
        bất kì
        nếu là số chẵn thì kiểm tra xem có lớn hơn 15 hay không?
            + nếu lớn hơn 15 in ra
        nếu là số lẻ thì kiểm tra xem có lớn hơn 6 hay không?

     */
    let number= +prompt("mời bạn nhập số bất kì!");
    if(number%2==0){
        // đây là số chẵn
        if(number>15){
            // console.log("số "+ number +"lớn hơn  số 15");
            console.log(`số ${number} lớn hơn số 15`);
            // template string || literal
            // số 20 lớn hơn số  15
        }else{
            console.log(`số ${number} nhỏ hơn số 15`);

        }
    }else{
        // là số lẻ
        // đây là số chẵn
        if (number > 6) {
            // console.log("số "+ number +"lớn hơn  số 15");
            console.log(`số ${number} lớn hơn số 6`);
            // template string || literal
            // số 20 lớn hơn số  15
        } else {
            console.log(`số ${number} nhỏ hơn số 6`);

        }
    }
