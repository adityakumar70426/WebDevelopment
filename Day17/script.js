let content=document.querySelector('.heading');
content.style.color='aquamarine';

//multiple properties
content.style.cssText='color:green;background-color:aquamarine';

content.setAttribute("style","color:red");

content.setAttribute("id","head");


//className
let d=content.className;
typeof d;

let f=content.className.split(' ');
console.log(f);

//classList return an array of class



