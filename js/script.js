let searchEl=document.querySelector('#search-icon');
let searchBoxEl=document.querySelector('.search-box');
searchEl.addEventListener(('click'),()=>{
    searchBoxEl.classList.add( "active");
})
let closeEl=document.querySelector('#close')
closeEl.addEventListener(('click'),()=>{
    searchBoxEl.classList.remove( "active");
})