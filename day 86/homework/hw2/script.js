//შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა რიცხვი ლუწი, თუ ლუწია, მაშინ გამოიტანოს 'ეს რიცხვი არის ლუწი', სხვა შემთხვევაში გამოიტანოს 'ეს რიცხვი არის კენტი'

function number(){
    let number = prompt('Enter number: ')

    if(number % 2 == 0){
        return "this number is Even"
    }
    else{
        return "this number is Odd"
    }
}