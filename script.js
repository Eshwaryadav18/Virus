document.addEventListener('DOMContentLoaded',()=>{
  const links=document.querySelectorAll('nav a');
  const path=location.pathname.split('/').pop()||'index.html';
  links.forEach(a=>{if(a.getAttribute('href')===path)a.classList.add('active')});
});