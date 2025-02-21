let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",(e)=>{
    let task = input.value;
    let del = document.createElement("button");
    let item = document.createElement("li");

    item.innerText =task;
 
    del.innerText = "delete";
    del.classList.add("del")
    ul.appendChild(item);
item.appendChild(del);
    input.value="";

});

ul.addEventListener("click",function(e){ //EVENT BUBBLING
    console.log(e.target.nodeName);    //parent event is automatically applied to child
    if (e.target.nodeName == "BUTTON"){
        let parent = e.target.parentElement;
        parent.remove();
    }
})

 // let delbtns = document.querySelectorAll(".del");    //DELEGATION - events to new elements are not applid
// for(btn of delbtns){
//     btn.addEventListener("click",function(){
// let parent = this.parentElement;

// parent.remove();
//     });
// }
