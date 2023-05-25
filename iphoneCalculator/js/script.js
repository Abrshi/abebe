let value=$(".value");
let number=$(".number");
let zero=$(".number-0");
let one=$(".number-1");
let two=$(".number-2");
let three=$(".number-3");
let four=$(".number-4");
let five=$(".number-5");
let six=$(".number-6");
let seven=$(".number-7");
let eight=$(".number-8");
let nine=$(".number-9");
let addition=$(".addition");
let subtraction=$(".subtraction");
let multiplication=$(".multiplication");
let division=$(".division");
let equal=$("equal");
let decimal=$(".decimal");
let ac=$(".ac");
let pm=$(".pm");
let percent=$(".percent");
let operator=$(".operator")
let zer=$(".zer")
//
let clickednum="";
let sum1="";
let array=[zero, one ,two, three ,four, five, six,seven, eight, nine];
//
for (let i = 0; i < array.length; i++) {
  array[i].click(myfunction)
  
  function myfunction(){
if (i===0) {
 
  clickednum=0;
} else if(i===1) {
  clickednum=1;
 }
 else if(i===2) {
  clickednum=2;
 }
 else if(i===3) {
  clickednum=3;
 }
 else if(i===4) {
  clickednum=4;
 }
 else if(i===5) {
  clickednum=5;
 }
 else if(i===6) {
  clickednum=6;
 }
 else if(i===7) {
  clickednum=7;
 }
 else if(i===8) {
  clickednum=8;
 }
 else if(i===9) {
  clickednum=9;
}
if (clickednum!==""){
let old = value.text();
value.text(old+clickednum)
return old;
  }




}
}

let array2=[addition, subtraction, multiplication,division];
for (let j = 0; j <= array2.length; j++) {
  array2[j].click(oprators);
function oprators() {
  if(j===0){
    value.text(0);
    operator.css({'background-color' : '#f1a33c'})
    addition.css({'background-color' : '#2ECC40'})
    let sum1=clickednum
  }
  else if(j===1){
    value.text(0);
    operator.css({'background-color' : '#f1a33c'})
    subtraction.css({'background-color' : '#2ECC40'})
    let sum1=clickednum
  }
  else if(j===2){
    value.text(0);
    operator.css({'background-color' : '#f1a33c'})
    multiplication.css({'background-color' : '#2ECC40'})
    let sum1=clickednum
  }
  else if(j===3){
    value.text(0);
    operator.css({'background-color' : '#f1a33c'})
    division.css({'background-color' : '#2ECC40'})
    let sum1=clickednum
  }
}
}

console.log(sum1+clickednum);