let t1 =performance.now();
for(let i=1;i<=10;i++){
    let newelement=document.createElement('p');
    newelement.textContent='This is para '+i;
    document.body.appendChild(newelement);
}

let t2=performance.now();
console.log('This took ' +(t2-t1) +' ms');


//fragment
let t3=performance.now();
let fragment=document.createDocumentFragment();
for(let i=1;i<=10;i++){
    let newelement2=document.createElement('p');
    newelement2.textContent='This is para '+i;
    fragment.appendChild(newelement2)
}
document.body.appendChild(fragment);
let t4=performance.now();
console.log('This took ' +(t4-t3) +' ms');

//set timeout
setTimeout(function(){
    console.log('hi everyone');
},5000);

