//progtam no # 01
var age = +prompt("enter your age ")

if(age>=18 && age<=65){
    alert("you are eligible for the work ")
} 
else{
    alert("you are not eligible for the work")
}

//program no # 02

let uname=prompt("enter user name ")
let password=prompt("enter the password")

if (uname==="ejaz" || password==="ahmad"){
    alert("login successful ")
}
else{
    alert("login failed")
}

//program no # 03

let hr = prompt("enter the hours between 0 -23")
if(!(hr>6 && hr <= 20)){
    alert("it's nighttime")
}
else{
    alert("it's day time")
}

//program no # 04
let num =prompt("enter the number ")

if(num % 2 === 0){
    alert("the number is even")
}
else{
    alert("the is number is odd")
}

//program no # 05
let weekday = prompt("checking for weekend and weekday ")
if (weekday==="sunday" || weekday==="saturday"){
    alert("it is weekend")
}
else{
    alert("it weekday ")
}