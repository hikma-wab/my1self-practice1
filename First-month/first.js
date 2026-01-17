const  btn =document.getElementById('btn');
const message =document.getElementById('message');


btn.addEventListener('click',()=>{
    message.innerText="you look awesome today!";
    document.body.style.backgroundColor="#ffde59";
    console.log("The mood has been changed!");
});