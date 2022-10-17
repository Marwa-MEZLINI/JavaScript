//(1)
function fullName(){
   let name =  "Marwa MEZLINI"
   return console.log(name)
}
fullName()

//(2)
function _fullName(){
    let firstName =  "Marwa"
    let lastName = "MEZLINI"
    return console.log(firstName,lastName)
 }
 _fullName()

//(3)
function addNumbers(a,b) {
    return console.log(a+b)    
}

addNumbers(9,75)

//(4)
function areaOfRectangle(length,width){
    area = length*width
    return area
}

console.log(areaOfRectangle(56,95))

//(5)
function perimeterOfRectangle(length,width){
    let perimeter = (length+width)*2
    return perimeter
}

console.log(perimeterOfRectangle(56,95))

//(6)
function volumeOfRectPrism(length,height,width){
    let volume = length*height*width
    return volume
}

console.log(volumeOfRectPrism(5,9,18))

//(7)
function areaOfCircle(π,r){
    let area = π * r * r
    return area
}

console.log(areaOfCircle(3.14,10))

//(8)
function circumOfCircle(π,r){
    let circumference = 2*π *r
    return circumference
}

console.log(circumOfCircle(3.14,10))

//(9)
const density = (mass,volume) => {
   let d = mass/volume
   return d
}
console.log(density(20,10))

//(10)
const speed = (distance,time)=>{
    let s =distance/time
    return s
}
console.log(speed(5000,100))
   
//(11)
const weight =(mass,gravity)=>{
    return mass*gravity
}

console.log(weight(56,10))

//(12)
function convertCelsiusToFahrenheit(oC){
    let oF = (oC * (9/5))+ 32
    return oF
}

console.log(convertCelsiusToFahrenheit(32))

//(13)
function bmi(){
    let _weight = prompt("enter your weight (in Kg)")
    let height = prompt("enter your height (in m)")
    let _bmi = _weight/(height * height)
    let msg 
    if (_bmi < 18.5)
        msg = "Underweight : Your BMI(" + _bmi + ") is less than 18.5"

    else if ( (_bmi > 18.4) && (_bmi < 25))
        msg = "Normal weight : Your BMI(" + _bmi + ") is between 18.5 and 24.9"
    
    else if ( (_bmi > 24.9) && (_bmi < 30) )
        msg = "Overweight : Your BMI(" + _bmi + ") is between 25 and 29.9"
    
    else if ( (_bmi > 29.9) )
        msg = "Obese : Your BMI(" + _bmi + ") is greater than 29.9"
    
  return  (msg) 
     
}

console.log(bmi())

//(14)
function  checkSeason(){
    let month = prompt("Enter a month")
    let msg
    if ((month === 'September') || (month === 'October') || (month === 'November'))
    msg ='The season is Autumn'

    else if ((month === 'December') || (month === 'January') || (month === 'February'))
    msg= 'The season is Winter'

    else if ((month === 'March') || (month === 'April') || (month === 'May'))
    msg = 'The season is Spring'

    else if ((month === 'June') || (month === 'July') || (month === 'August'))
    msg = 'The season is Summer'

    else
        msg = 'Not a month'
    
    return msg
}

console.log(checkSeason())

//(15)
function findMax(x,y,z){
    let max 
    if ((x > y) && (x > z))
        max = x
    else if ((y>x)&&(y>z))
        max = y
    else if ((z>x)&&(z>y))
        max = z
    
    return max
}
console.log(findMax(12,65,49))
