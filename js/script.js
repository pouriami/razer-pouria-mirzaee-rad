let searchEl=document.querySelector('#search-icon');
let searchBoxEl=document.querySelector('.search-box');
searchEl.addEventListener(('click'),()=>{
    searchBoxEl.classList.add( "active");
})
let closeEl=document.querySelector('#close')
closeEl.addEventListener(('click'),()=>{
    searchBoxEl.classList.remove( "active");
})
let barEl=document.querySelector('#bar')
let navEl=document.querySelector('nav')
var isOppened=false
barEl.addEventListener(('click'),()=>{
    if (isOppened) {
        navEl.classList.remove( "act-ham");
    } else {
        navEl.classList.add( "act-ham");
    }
    isOppened=!isOppened
}
)
// barEl.addEventListener(('click'),()=>{
//     if(closeEl=false){navEl.classList.remove( "act-ham");}
// })