
    AOS.init();

    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-btn');

    // Abrir menu mobile
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      mobileMenu.setAttribute('aria-hidden', 'false');
      // Focar no primeiro link para acessibilidade
      //const firstLink = mobileMenu.querySelector('a');
      //if (firstLink) firstLink.focus();
    });

    // Fechar menu mobile
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      mobileMenu.setAttribute('aria-hidden', 'true');
      //menuToggle.focus();
    });

    // Fechar menu ao clicar em link no mobile
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });

    // Configuração do btn voltar e scroll suave
    // botão voltar ao topo qdo chegar no fim da tela  
const scrollAnima=document.querySelector('[data-anima="scroll"]'); 
const metadeWindow = window.innerHeight * 1.1
function animaScroll(){
const topoItem = scrollAnima.getBoundingClientRect().top
const itemVisivel = topoItem - metadeWindow < 0
if(itemVisivel){
  scrollAnima.classList.add('btn-show')
} else{
    scrollAnima.classList.remove('btn-show')

}

}
animaScroll();
window.addEventListener('scroll', animaScroll);

// Scroll suave
const linkInterno = document.querySelector('[data-scroll="suave"] a[href^="#"]')
function scroll(event){
  event.preventDefault()
  const  href = event.currentTarget.getAttribute('href')
  const topo = document.querySelector(href)

  topo.scrollIntoView({
    behavior:'smooth',
    block: 'start'
  })
}

linkInterno.addEventListener('click', scroll) 


  
	


