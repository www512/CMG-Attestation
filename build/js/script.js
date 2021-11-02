"use strict";
const scrollLinks = document.querySelectorAll('a[href^="#"]');
for (let scrollLink of scrollLinks) {
  scrollLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = scrollLink.getAttribute('href');
    const element = document.querySelector(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset - 124;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
}
