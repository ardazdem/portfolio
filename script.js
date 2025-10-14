// Smooth scrolling for nav links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e){
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const container = document.querySelector('.hero-image-container');
const nameTag = container.querySelector('.name-tag');

let mouseX = 0, mouseY = 0;
let tagX = 0, tagY = 0;
const offsetY = -30; 

const follow = () => {
  tagX += (mouseX - tagX) * 0.15;
  tagY += (mouseY - tagY) * 0.15;
  nameTag.style.left = `${tagX}px`;
  nameTag.style.top = `${tagY + offsetY}px`;
  requestAnimationFrame(follow);
};
follow();

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

container.addEventListener('mouseenter', () => {
  nameTag.style.opacity = 1;
});

container.addEventListener('mouseleave', () => {
  nameTag.style.opacity = 0;
});

const viewAll = document.querySelector('.view-all a');

viewAll.addEventListener('mouseleave', () => {
  viewAll.classList.remove('hovered');
  void viewAll.offsetWidth;
  viewAll.classList.add('hovered');
});

const downloadLink = document.querySelector('.about-download a');

downloadLink.addEventListener('mouseleave', () => {
  downloadLink.classList.remove('hovered');
  void downloadLink.offsetWidth; // forces reflow
  downloadLink.classList.add('hovered');
});