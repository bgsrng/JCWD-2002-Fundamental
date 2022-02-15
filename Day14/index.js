// 1. Remove vowels
const removeVowels = (str) => {
    let arrStr = str.split("");
    let newStr = "";
    arrStr.forEach((val) => {
      if (!(val == "a" || val == "i" || val == "e" || val == "o" || val == "u")) {
        newStr += val;
      }
    });
    return newStr;
  };
  
  let input = "javascript";
  console.log(removeVowels(input));
  
  // 2.Alphabet value
  
  const alphabetValue = (arr) => {
    const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
    arr = arr.split("");
    let result = 0;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < alphabetArr.length; j++) {
        if (arr[i] == alphabetArr[j]) {
          result = result + (j + 1);
        }
      }
    }
    return result;
  };
  
  let input = "abc";
  let input2 = "steve";
  
  console.log(alphabetValue(input));
  console.log(alphabetValue(input2));
  
  // 3.Odd alphabet value
  
  const oddAlphabetValue = (arr) => {
    const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
    arr = arr.split("");
    let result = 0;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < alphabetArr.length; j++) {
        if (arr[i] == alphabetArr[j] && j % 2 === 0) {
          result = result + (j + 1);
        }
      }
    }
    return result;
  };
  
  let input = "abc";
  let input2 = "steve";
  
  console.log(oddAlphabetValue(input));
  console.log(oddAlphabetValue(input2));
  
  // 4. Unique items
  // Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
  // value/number yang sama. Tampilkan sebuah array baru yang berisi list value
  // unique (hanya berada di salah satu array saja)
  // Input: arr1 = [1, 3, 7, 4];
  // arr2 = [1, 5, 3, 7, 0];
  // Output: [5, 4, 0];
  
  const uniqueItems = (arr1, arr2) => {
    let unique1 = arr1.filter((val) => {
      return arr2.indexOf(val) == -1;
    });
  
    let unique2 = arr2.filter((val) => {
      return arr1.indexOf(val) == -1;
    });
    let newArray = unique1.concat(unique2);
  
    return newArray;
  };
  
  let input1 = [1, 3, 7, 4];
  let input2 = [1, 5, 3, 7, 0];
  console.log(uniqueItems(input1, input2));
  
  // Bonus Question
  // 5. Remove duplicates
  // Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
  // value/number yang sama. Tampilkan sebuah array baru yang berisi list value
  // dari kedua array tersebut, tetapi sudah
  // Input:
  // arr1 = [1, 3, 7, 4]
  // arr2 = [1, 5, 3, 7, 0]
  // Output: [1, 3, 4, 5, 7, 0]
  
  const removeDuplicates = (arr1, arr2) => {
    let newArr = arr1.concat(arr2);
    for (let i = 0; i < newArr.length; i++) {
      for (let j = i + 1; j < newArr.length; j++) {
        if (newArr[i] === newArr[j]) {
          newArr.splice(j, 1);
        }
      }
    }
    return newArr;
  };
  
  let input1 = [1, 3, 7, 4];
  let input2 = [1, 5, 3, 7, 0];
  console.log(removeDuplicates(input1, input2));