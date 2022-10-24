document.querySelector('body').style.display = 'flex'
document.querySelector('body').style.flexDirection = 'column'
document.querySelector('body').style.alignItems = 'center'
document.querySelector('body').style.fontFamily = 'calibri'


let header = document.querySelector('h1')
console.log(header.textContent)

let year = document.querySelector('spam')
year.id = "diff"
console.log(year);
document.getElementById("diff").style.fontSize = "100px"


setInterval(() => {
    document.getElementById("diff").style.color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}, 1000)
/*let colors = ["red","blue","purple",'green',"pink", "yellow","black","lightgreen",'lightblue','darkblue']
let currentColor = 0

function changeColor() {
  --currentColor
  if (currentColor < 0) currentColor = colors.length -1
  
    year.style.color = colors[(currentColor) % colors.length]
  
}
setInterval(changeColor, 1000)*/

document.querySelector('h2').style.fontWeight = '1px'
document.querySelector('h2').style.textDecoration = 'underline'
document.querySelector('h2').style.textAlign = 'center'

//document.getElementById('date').innerHTML = new Date()

document.getElementById('date').style.width = '250px'
document.getElementById('date').style.textAlign = 'center'
document.getElementById('date').style.alignSelf = 'center'

setInterval( function showDateTime(){
    let date = new Date()
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let year = date.getFullYear()
    let name = month[date.getMonth()];
    let day = date.getDay()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    document.getElementById('date').innerHTML = ( `${name} ${day}, ${year} ${hours}:${minutes}:${seconds}` )
    document.getElementById("date").style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
},1000)



/*const liElements = document.querySelectorAll("li");

liElements.forEach((li) => {
	console.log(li.innerHTML);
	if (li.innerHTML.includes("Ongoing")) {
		li.style.color = "yellow";
	} else if (li.innerHTML.includes("Coming")) {
		li.style.color = "red";
	} else if (li.innerHTML.includes("Done")) {
		li.style.color = "green";
	}
});*/