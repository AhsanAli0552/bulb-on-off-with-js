const on = document.querySelector("#on");
const off = document.querySelector("#off");
const img = document.querySelector("#img");
const body = document.querySelector("body");



on.addEventListener("click",()=>{
img.src = "images/bulb-f.png";
 body.classList.add("bulb");

})

off.addEventListener("click",()=>{
    img.src = "images/bulb-o.png";
    body.classList.remove("bulb");
    })


// function myfunctionon(){
//     img.src = "images/bulb-on.jfif";
// }

// function myfunctionoff(){
//     img.src = "images/bulb-off.jpg";
// }