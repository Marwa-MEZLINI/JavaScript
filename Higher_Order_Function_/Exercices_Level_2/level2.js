import { countries } from "./countries.js"
//(1)
const products = [
    { Product : 'banana', price : 3},
    { Product : 'mango', price : 6},
    { Product : 'potato', price : '' },
    { Product : 'avocado', price : 8},
    { Product : 'coffee', price : 10},
    { Product : 'tea', price : '' },
]
const totalPrice = products.filter((item) => typeof item.price === "number").reduce((item, index) => item + index.price, 0);

console.log(totalPrice);

//(2)

const sumOfPrice = products.reduce(function(accumulator, object)
 {

    return accumulator + ((object.price) !== '' && object.price);
  }, 0);
  
  console.log(sumOfPrice); 

//(3)






