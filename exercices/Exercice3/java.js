//(1)
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

//(2)
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//(3)
console.log(typeof ('10'))
console.log(typeof (10))

//(4)
console.log(parseFloat('9.8'))
console.log(parseFloat(10))

//(5)
let word1 = 'python', word2 = 'jargon'
console.log(word1.includes('on'), word2.includes('on'))

//(6)
let text = "I hope this course is not full of jargon."
console.log(text.includes('jargon'))

//(7)
console.log(Math.floor(Math.random() * 101))

//(8)
console.log(Math.floor(Math.random() * 51) + 50)

//(9)
console.log(Math.floor(Math.random() * 256))

//(10)
let string = 'JavaScript'
console.log(string.charAt(Math.floor(Math.random() * string.length)))

//(11)
let _string = "1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125"
console.log(_string)

//(12)
let string2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(string2.substr(31, 23))
