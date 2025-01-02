//მომხმარებელი შეჰყავს ქულა (0-100) და უნდა განსაზღვროს, რა შეფასება ეკუთვნის მას შემდეგი პირობის მიხედვით:

 
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// 0 - 59: F

let score = prompt('Enter score')

if (score >= 90 && score <= 100) {
    console.log("A")
} else if (score >= 80 && score <= 89) {
    console.log("B")
} else if (score >= 70 && score <= 79) {
    console.log("C")
} else if (score >= 60 && score <= 69) {
    console.log("D")
} else if (score >= 0 && score <= 59) {
    console.log("F")
} else {
    console.log("Invalid score")
}






