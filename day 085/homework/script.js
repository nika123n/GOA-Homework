//მოამზადე კოდი, რომელიც switch განცხადების გამოყენებით განსაზღვრავს დღის სახელს კვირის დღესთან შესაბამისობაში.

// მაგალითად:

// 1 -> ორშაბათი
// 2 -> სამშაბათი
// ...
// 7 -> კვირა
// თუ რიცხვი 1-დან 7-მდე არ არის, დაბეჭდოს: "არასწორი დღე".

weeks = [1,2,3,4,5,6,7]

switch(weeks){
    case 1:
        console.log('ორშაბათი')
        break
    case 2:
        console.log('სამშაბათი')
        break
    case 3:
       console.log('ოთხშაბათი')
       break
    case 4:
        console.log('ხუთშაბათი')
        break
    case 5:
        console.log('პარასკევი')
        break
    case 6:
        console.log('შაბათი')
        break
    case 7:
        console.log('კბირა')
        break
}
