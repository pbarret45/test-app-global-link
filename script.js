// Small interactive behaviors: set year and toggle mobile nav
document.addEventListener('DOMContentLoaded',function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');
  if(toggle && nav){
    toggle.addEventListener('click',function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if(!expanded){
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.gap = '0.5rem';
        nav.style.padding = '0.5rem 0';
      } else {
        nav.style.display = '';
      }
    });
  }
});
