// My age
const myAge = 29

//Early years
var earlyYears = 2

earlyYears *= 10.5;
console.log(earlyYears)

// Since 2 years is accounted for with early years, define later years
let laterYears = myAge - 2;

laterYears = laterYears * 4

console.log(laterYears)

// Add early and later years together

myAgeInDogYears = earlyYears + laterYears

//My name in lowercase
var myName = "Sid"

//Statement that shows my name and age w/ string interpolation

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`)
