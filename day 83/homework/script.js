//მომხმარებელი შეჰყავს ერთი რიცხვი და უნდა გამოიტანოს ინფორმაცია, არის ეს რიცხვი ლუწი თუ კენტი.

function number(){
    let number = prompt('enter number: ')

    if(number % 2 == 0){
        console.log("Even")
}
    else{
        console.log('Odd')
}
}

number()