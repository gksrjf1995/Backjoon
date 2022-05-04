var fs = require("fs");

//472 * 385 
// const data = fs.readFileSync("./number.txt").toString().split("\n");
// const value = (parseInt(data[0]));
// console.log( value * parseInt(data[1]%10) );
// console.log( value * (parseInt(data[1]/10) % 10) );
// console.log( value * (parseInt(data[1]/100)) );
// console.log(value * parseInt(data[1]));

const data = fs.readFileSync("./number.txt").toString().split(" ");

const [a , b] = data



if(a > b){
    console.log(">");
}else if(a < b){
    console.log("<");
}else{
    console.log("==");
}
