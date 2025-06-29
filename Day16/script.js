// DOM

//Window is a global object used to represent a window containing a dom document
//Document Object Model is a programming interface that represents the structure of a document as a tree of objects.
//Browser Object Model provides a way for js to communicate with browser,beyond just the content of the web page.

// Document Object model

let fd=document.getElementById('firstdiv');
console.log(main);

let sd=document.getElementsByClassName('sec');  //returns multiple elements
console.log(sd);

let para=document.getElementsByTagName('div');
console.log(para);

//query selector
let a =document.querySelector('#firstdiv');
console.log(a);

let b=document.querySelector('.sec');
console.log(b);

let c=document.querySelector('div'); //to get single or first element
console.log(c);

let d=document.querySelectorAll('div'); // to get all the elements
console.log(d);

let e=document.querySelector('#firstdiv'); 
console.log(e.innerHTML); //print the tags also
e.innerHTML='Hello world';
console.log(e);

let f=document.querySelector('#firstdiv');

console.log(f.textContent); //print the text

let g=document.querySelector('#firstdiv');
console.log(g.innerText); //does not print the content that is inside hidden


// Adding new element/content

let content=document.querySelector('.sec');
let newpara=document.createElement('p');
content.appendChild(newpara);


// create text node

let mypara=document.createElement('p');
mypara.textContent='I am Aditya';
content.appendChild(mypara); //last sibling

// insert adjacent html
// locations=beforebegin,afterbegin,beforeend,afterend

let content2=document.querySelector('.sec');
let newtext=document.createElement('h3');
newtext.textContent='abcd';
content2.insertAdjacentElement('beforebegin',newtext);

// remove text node
let child=document.querySelector('h3');
child.parentElement.remove(child);

