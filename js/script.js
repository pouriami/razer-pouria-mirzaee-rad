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
fetch('https://api.unsplash.com/photos/random/?count=5&client_id=52d8369eb3e2576a5f5b6423865e074e9c7045761bff1ac5664ff3e0bdb57a1d') 
  .then(response => response.json())
  .then(data => {
    data.forEach(function(image, i) {
      document.querySelector("#slide-" + (i+1)).innerHTML = `
        <img src="${image.urls.regular}" alt="">
        <p class="author-info">
          <a href="${image.links.html}?utm_source=slider-thing&utm_medium=referral&utm_campaign=api-credit">Photo by ${image.user.name}</a> on <a href="https://unsplash.com/">Unsplash</a>
        </p>
      `;
    });
  });