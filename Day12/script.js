console.log("hello");
let a='aditya';
console.log(a);
const num=12;
let b=5;
b='kumar';
console.log(b);

let person={
    name:'Aditya',
    age:22,
};
console.log(person.name,person.age);

let arr=['aditya',23,true];
console.log(arr[0],arr[2]);
arr[2]='hello';
console.log(arr[2]);

let d=5,e=2;
console.log(d+e,d-e,d*e,d/e,d%e,d**e);
console.log(++d,e++);
console.log(e>d);

let f=1;
let g='1';
console.log(f==g,f===g);

let age=16;
age>=18?console.log("You can vote"):console.log("You can't vote");

let state='rajasthan';
age>=18 && age<100 ? console.log("You can vote"):console.log("You can't vote");
age>=18 || state=='rajasthan' ? console.log("Marriage"):console.log("No marriage");

let h=2;
let i=3;
console.log(h&i,h|i);

let marks=75;

if(marks>70)console.log("pass");
else console.log("fail");

for(let i=0;i<5;i++){
    console.log(i);
}

let x=0;
while(x<5){
    console.log("AK");
    x++;
}

let y=0;
do{
    console.log(y);
    y++;
}while(y<5);