let content=document.querySelector('.heading');
content.style.color='aquamarine';

//multiple properties
content.style.cssText='color:green;background-color:aquamarine';

content.setAttribute("style","color:red");

content.setAttribute("id","head");

let d=content.className;
typeof d;

let e=content.classNames=content.className.split(' ');
console.log(e);

