//(1)
let month = prompt('Enter a month:')
console.log(month)

    if ((month === 'January') || (month === 'March') || (month === 'May') ||(month === 'July') || (month === 'August')|| (month === 'October')|| (month === 'December'))
     { console.log(month,'has 31 days') }

     else if ((month === 'April') ||(month === 'June') || (month === 'September') || (month === 'November'))
     { console.log(month,'has 30 days') }

    else if ( (month === 'February'))
    { console.log(month,'has 28 days') }

//(2)
let leap = false
let year = prompt("Enter the year")
console.log(year)

if (year % 4 === 0)
{leap = true}


console.log(leap)

if ((month === 'January') || (month === 'March') || (month === 'May') ||(month === 'July') || (month === 'August')|| (month === 'October')|| (month === 'December'))
     { console.log(month,'has 31 days') }

     else if ((month === 'April') ||(month === 'June') || (month === 'September') || (month === 'November'))
     { console.log(month,'has 30 days') }

    else switch(leap){
        case true : 
        if ( (month === 'February'))
           { console.log(month,'has 29 days') }
           break;

    case false : 
    if ( (month === 'February'))
       { console.log(month,'has 28 days') }
       break;

    }
