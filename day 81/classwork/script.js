// დაწერეთ პროგრამა, რომელიც მომხმარებელს მისცემს იმის შესაძლებლობას, რომ გამოიტანოს ტექსტი alert - ის სახით, თუ მომხმარებლის შემოტანილი ტექსტი მეტია 140 - ზე, მაშინ 140 - ის შემდეგ დაწერილი ტექსტი უნდა წაიშალოს, ხოლო თუ ასობგერების რაოდენობა შეადგენს 140 - ს, მაშინ ტექსტი გამოვიდეს ჩვეულებრივად.

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


