//დაწერეთ პროგრამა, რომელიც მომხმარებელს სთხოვს ტექსტის შემოტანას, თუ ტექსტის სიგრძე მეტია 140 - ზე, მაშინ უნდა ჩამოიჭრას ის ნაწილი, საიდანაც ტექსტის სიგრძე ცდება 140 - ს, შემდეგ გამოიტანეთ ის ნაწილი, სადაც ტექსტის სიგრძე არის 140 - მდე.

function text(){
    alert(prompt('shemoitane iseti winadadeba roemelshic iqnba mxolod 140 sityva: '))

    let text = alert.length

    if(text > 140){
        alert(text - 140)
}
    else{
        console.log(alert)
}
}

text()