//while ციკლის საშვალებით გამოიტანეთ 1-დან 20-მდე მხოლოდ ლუწი რიცხვები

let number = 1;

while (number <= 20) {
    if (number % 2 === 0) {
        console.log(number);
    }
    number++;
}