//შექმენით ფუნქცია, რომელიც შეამოწმებს რიცხვს არის თუ არა დადებითი, უარყოფითი ან ნულის ტოლი.

function number(){
    let number = prompt("Enter number: ")

    if (number < 0){
        return "uaryofitia"
    }
    else if (number > 0){
        return "dadebitia"
    }
    else{
        return "0-is tolia"
    }
}