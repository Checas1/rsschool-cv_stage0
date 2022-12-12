$(window).on('load', function(){
  $('.header').vide('./video/cover.mp4')
   , {bgColor: '#64947b'}
});

AOS.init();


// Nav

const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav_button')
const navBtnImg = document.querySelector('#nav_button-img')

navBtn.onclick = () => {
  if(nav.classList.toggle('open')){
    navBtnImg.src = './img/nav_close.svg';
  }else {
    navBtnImg.src = './img/nav.svg';
  }
}

// Button

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListeners() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 800 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = function (){
      console.log('warn')
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
btnUp.addEventListeners();