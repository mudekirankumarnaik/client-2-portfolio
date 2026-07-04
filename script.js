const typingText = document.getElementById('typing-text');
const phrases = [
  'Aspiring Software Developer',
  'Frontend Web Developer',
  'Python Learner',
  'Digital Marketing Enthusiast'
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = phrases[phraseIndex];

  if (!deleting) {
    charIndex++;
    typingText.textContent = current.slice(0, charIndex);

    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1500);
      return;
    }
  } else {
    charIndex--;
    typingText.textContent = current.slice(0, charIndex);

    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeLoop, deleting ? 55 : 90);
}

typeLoop();

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');
const topBtn = document.getElementById('topBtn');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      const id = entry.target.getAttribute('id');
      navItems.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
    }
  });
}, { threshold: 0.18 });

sections.forEach(section => observer.observe(section));

window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'inline-flex' : 'none';
});

topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
