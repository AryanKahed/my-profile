/* [STUDENT CUSTOMIZATION] Demo profile values also appear in index.html. Search for this label. */
const menuToggle=document.querySelector('.menu-toggle');const navLinks=document.querySelector('.nav-links');
menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open);menuToggle.textContent=open?'×':'☰'});
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰'}));
document.getElementById('theme-toggle').addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('portfolio-theme',document.body.classList.contains('dark')?'dark':'light')});
if(localStorage.getItem('portfolio-theme')==='dark')document.body.classList.add('dark');
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelector('.filter.active').classList.remove('active');button.classList.add('active');const filter=button.dataset.filter;document.querySelectorAll('.project-card').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.category!==filter})}));
