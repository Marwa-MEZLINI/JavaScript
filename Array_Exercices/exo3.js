//(1)
//
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 

ages.sort()
console.log(ages)

//
let min = Math.min.apply(null,ages)
console.log(min)
let max = Math.max.apply(null,ages)
console.log(max)

//
let _len = ages.length /2
let median = ((ages[_len - 1])+(ages[_len])) /2
console.log(median)

//
let sum = 0

for (let j = 0; j < ages.length ; j++ ) 
 sum = sum + ages[j]

console.log(sum)
let average = sum / ages.length
console.log(average)

//
let range = max - min
console.log(range)

//

if (Math.abs(min - average) === Math.abs(max - average))
console.log('equal')
else if (Math.abs(min - average) < Math.abs(max - average))
console.log('less than')
else
console.log('greater than')

//(2)
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
console.log(_countries.slice(0,10))

console.log(_countries[(_countries.length -1)/ 2])

//(3)
console.log(_countries.length)
if (_countries.length % 2 == 0)
{console.log('0')
    console.log(_countries.slice(0, _countries.length/2))}
else 
{console.log(_countries.slice(0, (_countries.length + 1)/2))
console.log('1')}
