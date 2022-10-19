import { countries } from "./countries.js"

//(1)
const sortByName = countries.sort((a,b)=> {
    if (a.name > b.name){
        return 1
    }
    else
    {
        return -1
    }
})

console.log(sortByName);

const sortByCapital = countries.sort((a,b)=> {
    if (a.capital > b.capital){
        return 1
    }
    else
    {
        return -1
    }
})

console.log(sortByCapital);

const sortByPopulation = countries.sort((a,b)=> {
    if (a.population > b.population){
        return 1
    }
    else
    {
        return -1
    }
})

console.log(sortByPopulation);