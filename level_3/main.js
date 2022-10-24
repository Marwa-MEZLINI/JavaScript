document.querySelector('body').style.display = 'flex'
document.querySelector('body').style.flexDirection = 'column'
document.querySelector('body').style.alignItems = 'center'
document.querySelector('body').style.fontFamily = 'calibri'


//the year color changing every 1 second

let year = document.querySelector('spam')
year.id = "diff"
console.log(year);
document.getElementById("diff").style.fontSize = "100px"


setInterval(() => {
    document.getElementById("diff").style.color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}, 1000)


document.querySelector('h2').style.fontWeight = '1px'
document.querySelector('h2').style.textDecoration = 'underline'
document.querySelector('h2').style.textAlign = 'center'


//the date and time background color is changing every 1 second

document.getElementById('date').style.width = '200px'
document.getElementById('date').style.textAlign = 'center'
document.getElementById('date').style.justifySelf = 'center'
document.getElementById('date').style.alignSelf = 'center'
document.getElementById('date').style.margin = '0'

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



const liElements = document.querySelectorAll("li");


liElements.forEach((li) => {
    li.style.padding = "15px"
    li.style.margin = "10px"
    li.style.listStyleType = 'none'
	console.log(li.innerHTML);
	if (li.innerHTML.includes("Ongoing")) {
		li.style.backgroundColor = "yellow";
	} else if (li.innerHTML.includes("Coming")) {
		li.style.backgroundColor = "red";
	} else if (li.innerHTML.includes("Done")) {
		li.style.backgroundColor = "green";
	}
});