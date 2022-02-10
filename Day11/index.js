// Conditions (find)
// 1. Mencari sebuah value (item) dalam array yang
//    memenuhi condition yang kita berikan
// 2. Callback function kita harus return boolean
// 3. Ketika callback function return true, loop akan berhenti
//    lalu function find akan return item dari array.

const drinks = ["Fanta", 
"Sprit", 
"Wine", 
"Mineral Water"];

const duplicateIndexOf = (arr, input) => {
  let indexResult;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === input) {
      indexResult = i;
      break;
    }
  }
  return indexResult;
};

const indexOf = duplicateIndexOf(drinks, "Wine");

console.log(indexOf);

const ages = [3, 13, 23, 33];

const duplicateFind = (arr, callback) => {
  let value;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      value = arr[i];
      break;
    }
  }

  return value;
};

const find = duplicateFind(ages, (val) => {
  return val > 10;
});

console.log(find);