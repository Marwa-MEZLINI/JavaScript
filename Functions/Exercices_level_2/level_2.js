//(1) value of x when y=0 and value of y when x=0
function solveLinEquation(a,b,c){
    
    x = -(c + b)/a
    y = -(c + a)/b
     return [x,y] 
}

console.log(solveLinEquation(6,3,9))
 
//(2)
function solveQuadEquation(a,b,c){
    let root1,root2
    let discriminant = ((b * b) - (4 * a * c))
   
        root1 = (- b + Math.sqrt(discriminant))/2
        root2 = (- b - Math.sqrt(discriminant))/2
    return {root1 , root2}
}

console.log(solveQuadEquation(1,-1,-2))

//(3)

function printArray(){
    const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']  
    webTechs.forEach(element => {console.log(element)
    
});}

printArray()

//(4)
function showDateTime(){
    let date = new Date()
    
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDay()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    return console.log( `${day}/${month}/${year} ${hours}:${minutes}` )
   
}

showDateTime()

//(5)
function swapValues(x,y){
    let a = x
    let b = y
    return `x => ${b} , y => ${a}`
}

console.log(swapValues(8,6))

//(6)
function reverseArray(arr) {
    let reversed = []
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);
    }
    return reversed
}
console.log(reverseArray([5,9,7,3,6]))

//(7)

function capitalizeArray(arr) {
    return arr.map(el => el.toUpperCase())
}

console.log(capitalizeArray(["javascript","html","css"]))

//(8)
function addItem(item, array) {
    array.push(item)
    return array
}

console.log(addItem(29,[6,9,25,49,85,26,3]))
//(9) 

function removeItem(index, array) {
    return array.filter((el, i) => i !== index)
}

console.log(removeItem(5,[95,75,84,6,85,26,35,46]))

//(10)



//(11)

