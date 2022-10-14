//(1)
let score = prompt('Enter your score')

if (score < 50)
    console.log('Your grade is : F')
else if (score > 49 && score < 60)
    console.log('Your grade is : D')
else if (score > 59 && score < 70)
    console.log('Your grade is : C')
else if (score > 69 && score < 80)
    console.log('Your grade is : B')
else if (score > 79 && score < 101)
    console.log('Your grade is : A')

//(2)
let month = prompt('Enter a month:');
console.log(month)

if ((month === 'September') || (month === 'October') || (month === 'November')) { console.log('The season is Autumn') }

else if ((month === 'December') || (month === 'January') || (month === 'February')) { console.log('The season is Winter') }

else if ((month === 'March') || (month === 'April') || (month === 'May')) { console.log('The season is Spring') }

else if ((month === 'June') || (month === 'July') || (month === 'August')) { console.log('The season is Summer') }

else
    console.log('Not a month')

//(3)
let day = prompt('Enter a day')
console.log(day)

    if ((day === 'Monday') || (day === 'Tuesday') || (day === 'Wednesday') || (day === 'Thursday') || (day === 'Friday'))
        { console.log(day,'is a working day.') }

    else if ((day === 'Saturday') || (day === 'Sunday'))
        { console.log(day,'is a weekend.') }

    else
        console.log('Not a day')