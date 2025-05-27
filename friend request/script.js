const acceptBtn = document.querySelector(".accept");
// const declineBtn = document.querySelector(".decline");
const relation = document.querySelector(".relation");
let check = 0;

/************ when we have two button ************/
// acceptBtn.addEventListener("click",()=>{
//     relation.innerHTML = "Friends";
//     relation.style.color = "green";
// })
// declineBtn.addEventListener("click",()=>{
//     relation.innerHTML = "Stranger";
//     relation.style.color = "red";
// })


/************ when we have one button ************/
acceptBtn.addEventListener("click",()=>{
    if(check == 0){
        relation.innerHTML = "Friends";
        relation.style.color = "green";
        acceptBtn.innerHTML = "Remove Friend"
        acceptBtn.classList.add("decline");
        check = 1;
    }else{
        relation.innerHTML = "Stranger";
        relation.style.color = "red";
        acceptBtn.classList.remove("decline");
        acceptBtn.innerHTML = "Add Friend";
        check = 0;
    }
})