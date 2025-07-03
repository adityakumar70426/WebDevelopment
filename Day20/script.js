//synchronous code

function sync(){
    console.log('first');
}
sync();
console.log('second');


// asynchronous code

setTimeout(function(){
    console.log('3');
},5000);
function async(){
    console.log('1');
}
async();
console.log('2');

// API Application Programming Interface

let merapromise=new Promise(function(resolve,reject){
    console.log('I am inside promise');
    //resolve(1);
    reject(new Error('Code phat gya'));
});
console.log('Pehla');


let promise1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('I am inside promise');
    },5000);
    resolve(1);
});
promise1.then((value)=>{console.log(value)});

let promise2=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('I am inside promise');
    },5000);
    reject(new Error('Code phat gya'))
});
promise2.catch((error)=>{console.log(error)});

let wada1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Set timeout 1');
    },2000);
    resolve(true);
})
let output=wada1.then(()=>{
    let wada2=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Set timeout 2');
    },3000);
    resolve("wada 2 resolved");
    })
    return wada2;

})
output.then((value)=>console.log(value));

// async function
async function abcd(){
    return 7;
}
console.log(abcd());

async function utility(){
    let hydmausam=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("hyd is cool");
        },6000);
    });

    let delmausam=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Del is hot");
        },4000);
    });

    let dm=await delmausam;
    let hm=await hydmausam; //not execute till line 84 is completed

    return [dm,hm];
}
console.log(utility());


//fetch
async function utility2(){
    let content=await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let output=await content.json();
    console.log(content);
}

console.log(utility2());


//post
async function helper(){
    let options={
        method:'POST',
        body: JSON.stringify({
            title:'Aditya',
            body:'Muscular',
            userId:1,
            Weight:'54',
        }),
        headers:{
            'Content-type':'application/json; charset=UTF-8',
        },
    };
    let content= await fetch('https://jsonplaceholder.typicode.com/posts/1',options);
    let response=content.json();
    return response;
}

async function utility3(){
    let ans=helper;
    console.log(ans);
}
console.log(utility3()); 
