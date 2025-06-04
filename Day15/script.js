// Functions are a block of code that fulfils a specific task

function run(){
    console.log('running');
}
run();

//function assignment
let stand=function walk(){
    console.log('walking');
}
stand();

let jump=stand;
jump();

function sum(){
    let total=0;
    for(let value of arguments) total =total + value;
    return total;
}

let ans=sum(1,2,3,4);
console.log(ans);

function sum2(...args){
    console.log(args);
}
sum2(1,2,3,4,5); // stored in the form of array

// Default parameters
function interest(p,r=5,y=10){
    return (p*r*y)/100;
}
console.log(interest(1000,10,5));

let person={
    fname:'Aditya',
    lname:'Kumar'
};
function fullname(){
    return `${person.fname} ${person.lname}`;
}
console.log(fullname());

let person2={
    fname:'Aditya',
    lname:'Kumar',

    get fullname(){
        return `${person2.fname} ${person2.lname}`;
    },

    set fullname(value){
        let parts=value.split(' ');
        this.fname=parts[0];
        this.lname=parts[1];
    }
};

person2.fullname='Anurag Kumar';
console.log(person2.fullname);


let person3={
    fname:'Aditya',
    lname:'Kumar',

    get fullname(){
        return `${person3.fname} ${person3.lname}`;
    },

    set fullname(value){
        if(typeof value!==String){
            throw new Error("You have not entered a string");
        }
        let parts=value.split(' ');
        this.fname=parts[0];
        this.lname=parts[1];
    }
};

try{
    person3.fullname='ayuhbc hijc';
}
catch(e){
    alert(e);
}
console.log(person3.fullname);

// Alert can't be shown in vs code
