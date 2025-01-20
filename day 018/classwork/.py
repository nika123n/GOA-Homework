#ექმენით ისეთი პროგრამა რომელიც 1დან 10მდე გამოითვლის ყველა რიცხვს for loop ის მეშვეობით და თითოეულ რიცხვს 1დან 10მდე დაამატებს სიაში. ციკლის შემდეგ კი გამოიყენეთ len ფუნქცია რატსაა გაიგოთ რამდენი ელემენტისგან შედგება ჩვენი სია


numbers_list = []

for numbers in range(10):
    numbers_list.append(numbers)

print(numbers_list)
print(len(numbers_list))