const hasilTambah = () => {
  const input1 = parseInt(document.getElementById("number1").value);

  const input2 = parseInt(document.getElementById("number2").value);
  let hasil = input1 + input2;
  document.getElementsByTagName("h2")[0].innerHTML = "Hasil: " + hasil;
};
const hasilKurang = () => {
  const input1 = parseInt(document.getElementById("number1").value);

  const input2 = parseInt(document.getElementById("number2").value);
  let hasil = input1 - input2;
  document.getElementsByTagName("h2")[0].innerHTML = "Hasil: " + hasil;
};
const hasilKali = () => {
  const input1 = parseInt(document.getElementById("number1").value);

  const input2 = parseInt(document.getElementById("number2").value);
  let hasil = input1 * input2;
  document.getElementsByTagName("h2")[0].innerHTML = "Hasil: " + hasil;
};
const hasilBagi = () => {
  const input1 = parseInt(document.getElementById("number1").value);

  const input2 = parseInt(document.getElementById("number2").value);
  let hasil = input1 / input2;
  document.getElementsByTagName("h2")[0].innerHTML = "Hasil: " + hasil;
};
