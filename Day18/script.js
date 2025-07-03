//monitor
monitorEvents(document);

//unmonitor
unmonitorEvents(document);

//eventlistener

function print(){
    console.log("you clicked");
};

//addeventlistener
document.addEventListener('click',print);

//remove eventlistener
document.removeEventListener('click',print);

// info. of event
let c=document.querySelector('#wrapper');
c.addEventListener('click',function(event){
    console.log(event);
});

//prevent Default action
let link=document.querySelector('a');
link[0].addEventListener('click',function(event){
    event.preventDefault();
    console.log('nhi chala');
});


