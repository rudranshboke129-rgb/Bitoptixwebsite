const menuBtn=document.querySelector('.menu-btn');const nav=document.querySelector('.nav-links');if(menuBtn&&nav)menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('form[data-demo]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const n=form.querySelector('.notice');if(n){n.style.display='block';n.textContent='Thank you! Your information has been saved in this demo website.'}form.reset()}));
function registerUser(e){e.preventDefault();const name=document.getElementById('regName').value,email=document.getElementById('regEmail').value,password=document.getElementById('regPassword').value;localStorage.setItem('bitoptixUser',JSON.stringify({name,email,password}));alert('Registration successful. Please login.');location.href='login.html'}
function loginUser(e){e.preventDefault();const email=document.getElementById('loginEmail').value,password=document.getElementById('loginPassword').value;const u=JSON.parse(localStorage.getItem('bitoptixUser')||'null');if((u&&u.email===email&&u.password===password)||(email==='admin@bitoptix.com'&&password==='admin123')){localStorage.setItem('bitoptixLoggedIn','yes');location.href=email==='admin@bitoptix.com'?'admin-dashboard.html':'customer-dashboard.html'}else alert('Wrong details. Register first, or use admin@bitoptix.com / admin123')}
function logout(){localStorage.removeItem('bitoptixLoggedIn');location.href='index.html'}

// Lightweight scroll reveal animation
const revealItems=document.querySelectorAll('.reveal,.card,.stat,.client');
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const revealObserver=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}})},{threshold:.12});
  revealItems.forEach((item,index)=>{item.classList.add('reveal');item.style.transitionDelay=`${Math.min((index%4)*80,240)}ms`;revealObserver.observe(item)});
}else{revealItems.forEach(item=>item.classList.add('visible'))}

// Image gallery lightbox
const lightbox=document.getElementById('lightbox');
if(lightbox){
  const lightboxImage=lightbox.querySelector('img');
  document.querySelectorAll('.gallery-item img').forEach(img=>img.addEventListener('click',()=>{lightboxImage.src=img.src;lightboxImage.alt=img.alt;lightbox.classList.add('open')}));
  const closeLightbox=()=>lightbox.classList.remove('open');
  lightbox.querySelector('button').addEventListener('click',closeLightbox);
  lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
}
