//while ციკლის საშვალებით გამოიტანეთ 1-იდან 100 - ის ჩათვლით ყველა 5-ის ჯერადი რიცხვი

let number = 1;

while (number <= 100) {
    if (number % 5 === 0) {
        console.log(number);
    }
    number++;
}