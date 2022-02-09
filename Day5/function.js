// ========== Pembuatan Function =============
// function displayMenu (){
//     console.log("Hello World!");
// }
// displayMenu()
// ===========================================
// ============ Parameter Function ===========
// function displayUsername (username){
//     console.log(`Hello ${username}`)
// }
// displayUsername("Doraemon")
// function displayUsername(username = "Naruto", greeting) {
//     console.log(`${greeting} ${username}`)
// }
// let username = "Doraemon"
// let greeting = "Good morning"
// displayUsername(username, greeting)
// let books = ["LOTR", "Harry Potter", "Sherlock", "Naruto"];
// let bookPrices = [10000, 7000, 12000, 15000]
// let fruit = ["leci", "jeruk", "apel", "mangga"]
// let fruitPrices = [8000, 3000, 5000, 8000]
// function displayMenu(itemNames, ItemPrices) {
//     for (let i = 0; i < itemNames.length; i++) {
//         console.log(`${i + 1}. ${itemNames[i]} || Rp. ${ItemPrices[i].toLocaleString()}`)
//     }
// }
// console.log("====== Books ======");
// displayMenu(books, bookPrices);
// console.log("");
// console.log("====== Fruit ======");
// displayMenu(fruit, fruitPrices);


// ======= Return Value ========
// ketika function udah ngereturn, dibawah return gabakal keexecute
// function sumTwoNumber(a = 0, b = 0) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         return "gunakan tipe data yang benar"
//     }
//     if (isNaN(a) || isNaN(b)) { //isNan ngeluarin true or false
//         return "pastikan number anda sesuai"
//     }
//     let hasil = a + b
//     return hasil
    // if ( hasil > 10){
    //     return "angka anda lebih dari 10"
    // } 
    //     return "angka anda 10 atau lebih kecil" // gaperlu pake else, karna return diatas udah di execute
// }
// let result = sumTwoNumber(7,1)
// console.log(result)
// ======== anonymous function/gapunya nama/di store di variable a ==========
// let a = function () {
//     console.log("hello")
// }
// a();

// =======================================================================
// ========== Arrow Function =================
// const b = (z, y) => {
//     return z + y
// }

//Langsung return
// const b = (z, y) => z + y

// console.log(b(3,2))

// const tambah = (first, second, callback) => {
//     return callback(first, second)
// }
// console.log(
// tambah(3, 5, (a, b) => {
//     return a + b;
// })
// )