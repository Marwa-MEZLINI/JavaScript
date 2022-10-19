import { countries } from "./countries.js"
//(1)
const products = [
    { Product : 'banana', price : 3},
    { Product : 'mango', price : 6},
    { Product : 'potato', price : '' },
    { Product : 'avocado', price : 8},
    { Product : 'coffee', price : 10},
    { Product : 'tea', price : '' },
]
const totalPrice = products.filter((item) => typeof item.price === "number").reduce((item, index) => item + index.price, 0);

console.log(totalPrice);

//(2)

const sumOfPrice = products.reduce(function(accumulator, object)
 {

    return accumulator + ((object.price) !== '' && object.price);
  }, 0);
  
  console.log(sumOfPrice); 

//(3)
function categorizeCountries(keyword) {
    console.log(countries.filter((country) => country.name.includes(keyword)))
}
categorizeCountries('stan')

//(4)
function letterNumber(){
  const alphaChar = 'ABCDEFGHJKLMNOPQRSTUVWXYZ'
  const lettercount = []
  

  for (let i = 0 ; i < (alphaChar.length) ; i++){
    const letter = countries.filter((item) => item.name.startsWith(alphaChar[i]))
    lettercount.push({'letter' : alphaChar[i] , 'number' : letter.length + 'times'})
  }

  return (lettercount)
}

console.log(letterNumber())

//(5)
function getFirstCountries(){
return countries.slice(0,10)
}

console.log(getFirstCountries())

//(6)
function getLastCountries(){
  return countries.slice((countries.length - 10))
}

console.log(getLastCountries());