//(1)
const countries = []

//(2)
const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']

//(3)
let len = webTechs.length
console.log(len)

//(4)
let first = webTechs[0] , middle = webTechs[3] , last = webTechs[webTechs.length-1]
console.log(first , middle , last)
//(5)
const mixedDataTypes =['name',25, 5.9 ,'techs',3 ,'trips','lucky-number']
let size = mixedDataTypes.length
console.log(size)
//(6)
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']

//(7)
console.log(itCompanies)

//(8)
console.log(itCompanies.length)

//(9)
console.log(itCompanies[0],itCompanies[3], itCompanies[itCompanies.length-1])

//(10)
console.log(itCompanies[0],itCompanies[1],itCompanies[2],itCompanies[3],itCompanies[4],itCompanies[5],itCompanies[6],)

//(11)
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

//(12)
console.log(itCompanies.toString())

//(13)
if (itCompanies.includes('Sass'))
    {console.log('Sass')}
else
    console.log('not found')

//(14)
let s = 0
for (let i = 0 ; i < itCompanies.length ; i++){
    if (itCompanies[i].split('o').length - 1 > 1)
        
    {console.log(itCompanies[i])}
}

//(15)
console.log(itCompanies.sort())

//(16)
console.log(itCompanies.reverse())

//(17)
console.log(itCompanies.slice(0,3))

//(18)
console.log(itCompanies.slice(4))

//(19)
console.log(itCompanies.slice(3,4))

//(20)
console.log(itCompanies.splice(0,1))
console.log(itCompanies)
//(21)
console.log(itCompanies.splice(2,1))

//(22)
console.log(itCompanies.splice(4,1))

//(23)
console.log(itCompanies.splice(0,6))
console.log(itCompanies)