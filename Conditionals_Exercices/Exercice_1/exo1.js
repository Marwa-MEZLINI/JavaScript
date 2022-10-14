//(1)
let age = prompt("Enter your age:")
console.log(age)

if (age < 18)
    {console.log("You are left with",18 - age ,"years to drive.")}
else
    {console.log("You are old enouph to drive.")}

//(2)
let myAge = 27
let yourAge = prompt("Enter your age:")

if (myAge < yourAge)
    {console.log("You are", yourAge - myAge, "years older than me.")}
else if (myAge > yourAge)
    {console.log("I am",myAge - yourAge,"years older than you.")}
else
    {console.log("We have the same age.")}

//(3)
let a = 12
let b = 8

if (a > b)
    {console.log('a is greater than b')}
else
    {console.log('a is less than b')}

let greater = a > b
const get = greater ? 'a is greater than b' : 'a is less than b';

console.log(get)

//(4)
let nbr = prompt("Enter a number:")
if (nbr % 2 === true)
{console.log(nbr , "is an even number.")}
else
    {console.log(nbr , "is an odd number.")}