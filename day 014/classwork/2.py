#შექმენით პროგრამა რომელსაც ჰქვია guess game, თქვენი დავალებაა, მომხმარებელს იქამდე შემოატანინოთ რიცხვი სანამ არ გამოიცნობს რიცხვ 5_ს, როცა გამოიცნობს ტერმინალში დაუბეჭდეთ რომ მან მოიგო, სხვა შემთხვევაში დაუბეჭდეთ რომ მან წააგო


correct_number = 5  

while True:  
    user_guess = int(input("guess  number: "))  
    if user_guess == correct_number:  
        print("You win")
        break  
    else:  
        print("shen waage scade tavidan")