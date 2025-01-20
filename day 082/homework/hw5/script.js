//1. მომხმარებელს შემოატანინეთ 3 რიცხვი.
//2. გამოიანგარიშე ამ სამი რიცხვის ჯამი და საშუალო.
//3. ჯამი და საშუალო გამოიტანე როგორც console.log()-ში, ასევე alert()-ში.

let number = Number(prompt('enter number: '))
let number2 = Number(prompt('enter number: '))
let number3 = Number(prompt('enter number: '))

let sum = number + number2 + number3
let sashualo = sum / 3

console.log(sum)
console.log(sashualo)

alert(sum)
alert(sashualo)