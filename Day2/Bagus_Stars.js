let row = 5

for (let i = 1; i <= row; i++) {
  let bintang = ''
  for (let j = 1; j <= row; j++) {
    if (j <= i){
      bintang += '*'
    }
  }
  console.log(bintang)
}

// for (let i = 1; i <= row; i++) {
//   let bintang = ''
//   for (let j = row; j >= 1; j--) {
//     if (i >= j){
//       bintang = bintang + '*'
//     } else {
//       bintang = bintang + ' '
//     }
//   }
//   console.log(bintang)
// }
