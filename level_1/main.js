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

//-----------------level 2 ---------------------------//
//(1)
allParag[0].style.fontFamily = "calibri"
allParag[1].style.textAlign = 'center'
allParag[2].style.padding = '16px'
allParag[3].style.margin = "15px"

//(2)
for ( let i =0 ; i< allParag.length ; i ++){
  allParag[i].style.fontSize = '24px' 
  allParag[i].style.padding = '15px'
  allParag[i].style.margin = '5px'
  allParag[i].style.borderRadius = "30px"
  allParag[i].style.textAlign = 'center'
  allParag[i].style.fontWeight = 'bolder'
  if (i % 2 === 0) {
    allParag[i].style.color = 'green'
    allParag[i].style.backgroundColor = 'yellow'
  } else {
    allParag[i].style.color = 'red'
    allParag[i].style.backgroundColor = 'orange'
  }
}

//(3)
allParag[0].textContent = "This Is The First Paragraph"
allParag[1].textContent = "This Is The Second Paragraph"
allParag[2].textContent = "This Is The Third Paragraph"
allParag[3].textContent = "This Is The Fourth Paragraph"

allParag[0].className= 'para1'
allParag[1].className= 'para2'
allParag[2].className= 'para3'
allParag[3].className= 'para4'

allParag[0].id = 'first'
allParag[1].id = 'second'
allParag[2].id = 'third'
allParag[3].id = 'fourth'



