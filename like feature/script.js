const container = document.querySelector(".container");
const like = document.querySelector("#like");

container.addEventListener('dblclick',function(){
    like.style.transform = 'translate(-50%, -50% ) scale(1.4);'
    like.style.opacity = 0.8;
    setTimeout(() => {
        like.style.transform = 'translate(-50%, -50% ) scale(0);'
        like.style.opacity = 0;
    }, 1500);
})