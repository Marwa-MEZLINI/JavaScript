//(1)
/*import {countries} from "./countries.js"
import {webTechs} from "./web_techs.js"*/

import { countries } from "./countries.js"
import { webTechs } from "./web_techs.js"

console.log(countries, webTechs)

//(2)
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let newText = text.replace(/,./g, " ")
/* (let _newText = newText.replace(/./g,"")*/

console.log(newText)

let words = newText.split(" ")
console.log(words)
console.log(words.length)

//(3)
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart)
shoppingCart.unshift('Meat')
console.log(shoppingCart)
shoppingCart.push('Sugar')
console.log(shoppingCart)
delete shoppingCart[4]
console.log(shoppingCart)
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)

//(4)
const _countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
console.log(_countries)

if (_countries.includes('Ethiopia'))
    console.log('ETHIOPIA')
else
    _countries.push('Ethiopia')


//(5)
console.log(webTechs)

if (webTechs.includes('Sass'))
    console.log('Sass is a CSS preprocess')
else
    webTechs.push('Sass')
console.log(webTechs)

//(6)
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
