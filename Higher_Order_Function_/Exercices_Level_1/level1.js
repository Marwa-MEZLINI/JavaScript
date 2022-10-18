//(1)
/*forEach() is used to iterate an array elements, it takes a callback function with elements and exectute the code on every elemnt of the array.

map() is used to iterate and modify the array elements.
It takes a callback function with elements, index or array parameters and returns a new array with the modified elements.

Filter() is used to fullfill filtering conditions, it takes a condition and filters all the array elements looking for that specified condition
and returns a new array containing the filtered elements.

The reduce() method executes a reducer callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.
It returns a single value: the function's accumulated result and it does not change the original array.*/

//(2)

const numbers =  [1, 2, 3, 4, 5];
numbers.forEach(num => console.log( 'num' , num ** num))

const _numbers = numbers.map((num) => (num - 3))
console.log(_numbers)

const __numbers = numbers.filter((num) => (num > 3))
console.log(__numbers)

const initialValue = 0;
const sumWithInitial = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
)
console.log(sumWithInitial);

//(3)
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach(element => {
    console.log(element);
});

//(4)
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach(element => {
    console.log(element);
});

//(5)
const numbersArray = [1,2,3,4,5,6,7,8,9,10]
numbersArray.forEach(num => {
    console.log(num);
});

//(6)
const countriesUpperCase = countries.map((element) => (element.toUpperCase()))
console.log(countriesUpperCase);

//(7)
const countriesLength = countries.map((element)=> (element.length))
console.log(countriesLength);

//(8)
const numbersArraySquare = numbersArray.map((num) => (num * num))
console.log(numbersArraySquare);

//(9)
const namesUpperCase = names.map((element) => (element.toUpperCase()))
console.log(namesUpperCase);

//(10)
const products = [
    { Product : 'banana', price : 3},
    { Product : 'mango', price : 6},
    { Product : 'potato', price : ' '},
    { Product : 'avocado', price : 8},
    { Product : 'coffee', price : 10},
    { Product : 'tea', price : ''},
]
const productByPrice = products.map(item =>{
    const container = {}
    container[item.Product] = item.price 
    return container
});
console.log(productByPrice);

//(11)
const countriesContainingLand = countries.filter((country) =>
    country.includes('land')
)
console.log(countriesContainingLand)

//(12)
const countriesHaveSixChar = countries.filter((country) =>(
    country.length == 6 )
)
console.log(countriesHaveSixChar)

//(13)
const countriesHaveSixAndMoreChar = countries.filter((country) =>(
    (country.length == 6 ) | (country.length > 6 ))
)
console.log(countriesHaveSixAndMoreChar)

//(14)
const countriesStartWithE = countries.filter((country) =>(
    country.startsWith("E"))
)
console.log(countriesStartWithE)

//(15)
const pricesWithValues = products.filter((item) =>( item.price > 0 )
)
console.log(pricesWithValues)

//(16)
function getStringLists(arr){
    return arr.toString()
}

console.log(getStringLists([1,9,1,4,8,5,6,4]))

//(17)
const initialVal = 0;
const sum = numbersArray.reduce(
  (previousVal, currentVal) => previousVal + currentVal,
  initialVal
)
console.log(sum);

//(18)
var countriesToString = countries.reduce((prevVal,currVal,idx)=>{
    return idx == 0 ? currVal : prevVal + ', ' + currVal + '';
}, '')
countriesToString = setCharAt(countriesToString,(countriesToString.length - 8),'and ')
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
console.log(countriesToString , 'are north European countries');

//(19)
/*every() is used to check if all the elements are similar in one aspect while some() is
used to check if some of the elements are similar in one aspect (atleast one element fullfills the condition).
Both returns boolean.*/

//(20)
const greaterThan7 = names.some((name) => name.length > 7 ) 
console.log(greaterThan7)

//(21)
const countriesWithLand = countries.every((country) => country.includes('land'))
console.log(countriesWithLand);

//(22)
/**
 * find() is used to find and return the first element that satisfies the condition while 
 findIndex() is used to find and return the position of the first element that satisfies
 the condition
 */

//(23)
const countryWith6Char = countries.find((country) => (country.length) == 6 )
console.log(countryWith6Char);

//(23)
const _countryWith6Char = countries.findIndex((country) => (country.length) == 6 )
console.log(_countryWith6Char);

//(24)
const country1 = countries.findIndex((country) => (country === 'Norway' ))
console.log(country1);

//(25)
const country2 = countries.findIndex((country) => (country === 'Russia' ))
console.log(country2);