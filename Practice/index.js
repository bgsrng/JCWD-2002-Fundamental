// let angka = '12'
// angka = angka * 2
// angka++
// angka--
// angka += '1'
// console.log(angka)

// var name = "andika"
// name = name + "julien"
// var name = "taufik"
// console.log(name)

// GetDouble(4)

// const GetDouble = function (numb) {
//     console.log(2*2)
// }

// let word = "learn Javascript at Purwadhika"
// word.replace("a","o")
// word.split(" ")
// word.reverse(word)

// function PrintMessage (message, callback){
//     callback(message)
// }
// PrintMessage('Hallo', 'dunia')

// let nama = 'indra'
// let umur = 17

// if (!nama || !umur) {
//     console.log('data salah')
// } else if (nama && umur > 17) {
//     console.log(`${nama} sudah dewasa`)
// } else if (nama && umur < 17) {
//     console.log(`${nama} belum dewasa`)
// } else {
//     console.log('data tidak lengkap')
// }

// let user = {
//     name : 'andika',
//     age : 19
// }
// console.log(user.name)
// console.log(user.status)

// let data = [
//     'number',
//     true,
//     { name : 'junior', age : 17},
//     () => [{ result : 'callback'}],1
// ]
// console.log(data[3]()[0]["result"]);

// console.log(String(12) === "12")
// console.log(typeof console.log)

// let arr = ["book", true, [1, "banana"],
//  null, ["false", [2, NaN], false,
//   ["clock", 0]], NaN, false,[true]]

//   console.log(Boolean(arr[4][3][0]))

// let str = 'javascript is for everyone yo!'.split(' ')
// console.log(str)

// for (let i = 0; i < str.length; i +=1) {
//     console.log(str[i])
//     console.log(str)
//     str.push(str)
// }

// function CAPITALIZE () {
//     let name = 'KLEE'

// }
// console.log(name)

// GetDouble(4)
// function GetDouble (numb) {
//     console.log(2*2)
// }

// let angka = '12z'
// angka = Number(angka)
// angka = String(angka)

// console.log(angka)
// console.log(typeof angka)

// let ouput = 'Hello'
// if ("0" != true) {
//     ouput += ", World!"
// }
// console.log(ouput)

function findMissingLetter(array) {
    // let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
  
    const firstIdx = array[0];
    if (firstIdx === firstIdx.toUpperCase()) {
      alphabet = alphabet.join("").toUpperCase().split("");
    }
  
    const firstFromAlphabet = alphabet.indexOf(firstIdx);
    console.log(firstFromAlphabet);
  
    alphabet = alphabet.splice(firstFromAlphabet, array.length + 1);
    console.log(alphabet);
    for (let i = 0; i < alphabet.length; i++) {
      if (array.indexOf(alphabet[i]) == -1) {
        return alphabet[i];
      }
    }
  }

console.log(alphabet(["b", "c", "d", "f"]));
console.log(alphabet(["O", "Q", "R", "S"]));