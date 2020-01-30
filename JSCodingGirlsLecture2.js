
function sum1(a, b) {
 return a + b;
}

const sum2 = function (a, b) {
 return a + b;
}
console.log(sum1(3, 5));
console.log(sum2(3, 5));
console.log(typeof sum1);

//lambda function

const sum3 = (a, b) => {
 return a + b
}

const pow1 = (number) => {
 return number ** 2;
}
const pow2 = number => number ** 2
console.log(pow2(25));

const sort = array => {
 array.sort();
 return
}

let array_var = [23, 1, 4, -6, 0];
console.log(array_var);
sort(array_var);
console.log(array_var);

let array_one = [];
let array_two = array_one;
console.log(array_one, array_two);
array_two.push(100);
console.log(array_one, array_two);

let x = 5;
if (true) {
 console.log(x);
 x = 10;
}
console.log(x);
let j;
for (j = 0; j < 10; j++) {
 console.log(j);

}
console.log(j);

const person = {
 fName: 'John',
 lName: 'Doe',
 age: 34,
 call: function () {
  console.log(`Hi I am ${this.fName} ${this.lName} and I am ${this.age} years old`);
 }
}

person.call();

const fibonacci=(n,arr=[1,1],i=2)=>{
 if (n<1){return;}
  switch(n){
   case 1:
    return [1];
   // break;
    case 2:
     return [1,1];
     //default:
  }
  arr.push(arr[arr.length-1]+arr[arr.length-2]);
  i++;
  if (i===n){
   return arr
  }
  return fibonacci(n,arr,i)
}

const result=fibonacci(10);
console.log(result);


function FizzBuzz(){
let arr=[];
 for (let i=0;i<=100;i++){
  if (i%3===0){
   console.log("Fizz")
  }else if(i%5===0){
   console.log("Buzz");
  }else if(i%3===0 && i%5===0){
   console.log("FizzBuzz");
  }else{
   console.log(i);
   
  }
 }
}

FizzBuzz()

let happyNumbers=(number)=>{
 const start_number=number;
 let sad=false;
 let cache=[];
 while (number >=10){
 const new_number = 0;
 const number_digits=Array.from(String(number));
 for (const index in number_digits) {
 number_digits[index]=number_digits[index]**2;
  
  }
 number=0;
 for (const digit of number_digits) {
  number+=digit;

 }
 return number===1 ? start_number: 'sad'
}
 const lucky = [];
 let i = 10;
 while (lucky.length < 5) {
  const result = happyNumbers(i);
  i++;
  if (result!=="sad"){
     lucky.push(result);
  }
}
 console.log(lucky)

}











