let rectangle={
    length:2,
    breadth:1,

    draw:function(){
        console.log('Draw rectangle');
    }
};
console.log(rectangle.length*rectangle.breadth);
console.log(rectangle);

console.log(rectangle.draw());


// Factory Function
// camelcase notation ->numberofstudents

function createrectangle(){
    let rectangle={
        length:3,
        breadth:2,

        draw:function(){
            console.log('Draw rectangle');
        }
    };
    return rectangle;
}

let rectangle1=createrectangle();
console.log(rectangle1);

function createrectanglepara(len,bre){
    let rectangle={
        length:len,
        breadth:bre,

        draw:function(){
            console.log('Draw rectangle');
        }
    };
    return rectangle;
}

let rectangle2=createrectanglepara(5,6);
console.log(rectangle2);

// Constructor function
// Pascal notation ->NumberOfStudents

function Triangle(){
    this.side1=2;
    this.side2=3;
    this.side3=4;
    this.draw=function(){
        console.log('Draw Triangle');
    }
}

let Triangle1=new Triangle();
console.log(Triangle1);
console.log(Triangle1.draw());


function Trianglepara(s1,s2,s3){
    this.side1=s1;
    this.side2=s2;
    this.side3=s3;
    this.draw=function(){
        console.log('Draw Triangle');
    }
}

let Triangle2=new Trianglepara(7,8,9);
console.log(Triangle2);
console.log(Triangle2.draw());

Triangle2.colour='Yellow';
console.log(Triangle2);

delete Triangle2.colour;
console.log(Triangle2);

console.log(Triangle1.constructor);
console.log(Triangle.constructor);

//Primitive are copied by their value
let a=10;
let b=a;
a++;
console.log(a,b);

//Reference are copied by their address
let c = { 
    value:10
};
let d=c;
c.value++;
console.log(c.value,d.value);

let e=10;
function inc(e){
    e++;
}
inc(e);
console.log(e);

let f={
    value:14,
}

function increment(f){
    f.value++;
}

increment(f);
console.log(f.value);


let square={
    area:25,
    perimeter:20,
}

// for-in loop

for(let key in square){
    console.log(key,square[key]);
}

// for-of loop only on iterables (array,map)

for(let key of Object.keys(square)){
    console.log(key);
}

for(let key of Object.entries(square)){
    console.log(key);
}

if('color' in square){
    console.log('Present');
}
else{
    console.log('Absent');
}

// Object Cloning

// Iteration Cloning

let square2={

};

for(let key in square){
    square2[key]=square[key];
}

console.log(square2);

// Assign Cloning

let square3=Object.assign({},square);
console.log(square3);

// Spread Cloning

let square4={...square};
console.log(square4);


// Garbage Collection: used to deallocate the memory of variables not in use. Runs in background.
