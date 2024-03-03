let btn = document.querySelector("button");
let body = document.querySelector("body");
let anchor = document.querySelectorAll("a")
let toggle  = false;


btn.addEventListener("click", (e)=> {
    if(toggle == false) {
        body.classList.add("theme");
        for(let a of anchor) {
            a.children[0].classList.add("theme")
            a.children[1].classList.add("theme")
        }
        btn.classList.add("buttonActive")

        toggle = true
    } 
    else{
        console.log("remove")
        body.classList.remove("theme");
        for(let a of anchor) {
            a.children[0].classList.remove("theme")
            a.children[1].classList.remove("theme")
        }
        btn.classList.remove("buttonActive")
        toggle = false;
    }
})