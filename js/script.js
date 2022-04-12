const loginBtn = document.querySelector('#login');

function showForm(){
  const loginForm = document.querySelector('#form');
  const signupA = document.querySelector('.signup-a');

  loginForm.classList.add('ativo');
  loginBtn.style.display='none';
  signupA.style.display='none';
}
loginBtn.addEventListener('click', showForm);


const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
  if(event.type === 'touchstart')event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);