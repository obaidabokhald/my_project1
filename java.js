let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');

//we do function to know if I can reach to the internet .....
//when I do to update the page .....
window.onload=function(){
    if ( window.navigator.onLine){
        onLine()
    }
    else{
        offLine()
    }
}
//when you have the internet do this function....
window.addEventListener("online", function(){
    onLine();
})
//when you don't have the internet do this function....
window.addEventListener("offline", function(){
    offLine();
})

//when I click on this bottom do reload for the page....
reload.onclick=function(){
    window.location.reload();
}
//if I connected the InterNet or no .....
function onLine(){
    title.innerHTML= 'Online Now ';
    //write in the title (Offline)=> Online Now ....
    title.style.color='green';
    //add class the hidden if I was connected the InterNet ....
    //and hidden the ul and the bottom (reload)....
    ul.classList.add('hide');
    reload.classList.add('hide');

}

function offLine(){
    //write in the title (Offline)=> Offline Now ....
    title.innerHTML= 'Offline Now ';
    title.style.color='#666';
    //add class to stop the hidden if I wasn't connected the InterNet ....
    //and don't hidden the ul and the bottom (reload)....
    ul.classList.remove('hide');
    reload.classList.remove('hide');
}