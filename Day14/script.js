//Math

// generate a random no. b/w 0 and 1
console.log(Math.random());
console.log(Math.random());

// roundoff
console.log(Math.round(1.63));

// maximum
console.log(Math.max(3,5,2,4));

//object string
let firstname='Aditya';
let lastname=new String('Kumar');

console.log(typeof(firstname));
console.log(typeof(lastname));

// more on string object
console.log(lastname.includes('um'));
console.log(lastname.startsWith('Kum'));
console.log(lastname.endsWith('a'));
console.log(lastname.indexOf('u'));
console.log(lastname.toUpperCase());
console.log(lastname.replace('Ku','Tees'));

let message='This is my first message';
let words=message.split(' ');
console.log(words);


// \ is used to prind characters
let message2='This is my \' second message';
console.log(message2);

// text inside `` is printed same as written
let message3=`Hello! How are you?`;
console.log(message3);

// Date
let date=new Date();
console.log(date);

// Array
let arr=[1,4,7,2,5];
console.log(arr);
arr.push(9);
arr.unshift(8);
arr.splice(2,0,7); // index,no. of elements to delete,element to be inserted
console.log(arr);
console.log(arr.indexOf(7));
console.log(arr.includes(5));

let courses=[
    {no:1,name:'Aditya'},
    {no:2,name:'Anurag'}
];
console.log(courses);

console.log(courses.indexOf({no:1,name:'Aditya'})); //wrong 

// Callback function

let course=courses.find(function(course){
    return course.name=='Aditya';
})

console.log(course);

// removing element
// end=pop, start=shift, middle=splice

let numbers=[1,2,3,4,5,6,7,8];
numbers.pop();
numbers.shift();
numbers.splice(3,1,);
console.log(numbers);

// Emptying an array
let numbers2=numbers;

// Method 1
numbers=[];
console.log(numbers);
console.log(numbers2);

// Method 2
let numbers3=[1,2,3,4,5,6,7,8];
let numbers4=numbers3;
numbers3.length=0;
console.log(numbers3);
console.log(numbers4);

// Method 3
let numbers5=[1,2,3,4,5,6,7,8];
let numbers6=numbers5;
numbers5.splice(0,numbers5.length);
console.log(numbers5);
console.log(numbers6);

// Combining arrays

let first=[1,2,3,4,5];
let second=[6,7,8,9,10];
let combined=first.concat(second);
console.log(combined);

// Slicing array

let sliced =combined.slice(4,6);
console.log(sliced);

// Spread operator
let third=[1,2,3];
let fourth=[6,7,8];
let combined2=[...third,'a',...fourth,'b'];
console.log(combined2);

// Iterating an array

let fifth=[1,2,3,4,5];
for(let value of fifth){
    console.log(value);
}

// joining arrays
let sixth=[1,2,3,4,5,6];
const joined=sixth.join(',');
console.log(sixth);

// Spliting array
let message4='My name is Aditya';
let parts=message4.split(' ');
console.log(parts);

// sorting array
//converts to string then sort
let seventh=[1,6,33,7,4,6,3,10];
seventh.sort();
console.log(seventh);

// Filtering
let eighth=[2,4,8,-3,5,-7,3,-1,3,4];
let filtering=eighth.filter(function(value){
    return value>=0;
});
console.log(filtering);

// mapping arrays
let ninth=[3,45,8,3];
let students=ninth.map(function(value){
    return 'student_no.: ' + value;
});
console.log(students);

// Mapping wu=ith objects

let tenth=[1,-4,6,-2];
let filtered=tenth.filter(function(value){
    return value>=0;
});

let items=filtered.map(function(num){
    let obj={value:num};
    return obj;
});
console.log(items);