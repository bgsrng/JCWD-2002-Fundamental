// Inputan user / document.getElementById().value
const input = "on";

const arr = ["Doraemon", "Naruto", "Pokemon", "Boruto", "One Piece"];

const newArr = [];

arr.forEach((val) => {
  if (val.toLowerCase().includes(input.toLowerCase())) {
    newArr.push(val);
  }
});

console.log(newArr);
