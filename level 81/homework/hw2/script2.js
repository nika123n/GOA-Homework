//დაწერეთ ფუნქცია, სადაც მომხმარებელი შემოიტანს მის სახელს პატარა ასოებით, თქვენი დავალებაა, რომ დაწეროთ კოდი ისე, რომ შემოტანილი სახელის პირველი ასო გაადიდოთ და შემდეგ მიესალმოთ მომხმარებელს შემდეგნაირად: "Hello Name" - (name - ში უნდა ჩაჯდეს მომხმარებლის შემოტანილი სახელი).

function text(){
    let text = prompt('shemoitane sheni saxeli patara asoebit: ')

    let text2 = text.toUpperCase()

    alert('hello ' + text2)
}

text()