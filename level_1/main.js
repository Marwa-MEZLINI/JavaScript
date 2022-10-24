//(1)
let firstParag = document.querySelector('p')
console.log(firstParag);

//(2)
let byId_1 = document.querySelector('#parag_1')

let byId_2 = document.querySelector('#parag_2')

let byId_3 = document.querySelector('#parag_3')

let byId_4 = document.querySelector('#parag_4')

console.log(byId_1);
console.log(byId_2);
console.log(byId_3);
console.log(byId_4);

//(3)
let allParag = document.querySelectorAll('p')

console.log(allParag);

//(4)
let text = ''

for ( let i =0 ; i< allParag.length ; i ++){
    text = allParag[i].textContent
    console.log(text)
}

//(5)
let newById_4 = byId_4.textContent = "Fourth Paragraph"
console.log(newById_4);

//(6)
allParag[0].setAttribute('class','content')
console.log(allParag[0])
allParag[1].className = "new-class"
console.log(allParag[1]);

allParag[2].id = "new-id"
console.log(allParag[2]);
allParag[3].classList.add('parag','fourth')
console.log(allParag[3]);
