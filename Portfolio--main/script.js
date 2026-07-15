/*----mobile nav menu----*/
function myMenuFunction() {
  const menuBtn = document.getElementById('myNavMenu');
  menuBtn.classList.toggle('responsive');
}

// close mobile menu after clicking a link
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('myNavMenu').classList.remove('responsive');
  });
});

/*----dark mode----*/
const body = document.querySelector('body'),
  toggleSwitch = document.getElementById('toggle-switch');

toggleSwitch.addEventListener('click', () => {
  body.classList.toggle('dark');
});

/*----Typing Effect: name-----*/
const typingEffect = new Typed('.typedText', {
  strings: ['Viji Prakash Sharma', 'a Java Developer', 'a Problem Solver'],
  loop: true,
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1800,
});

/*----Typing Effect: role line-----*/
const roleTyping = new Typed('#typed-role', {
  strings: [
    'Java Full Stack Developer',
    'Spring &amp; Hibernate',
    'REST API Builder',
    'Team Leader',
  ],
  loop: true,
  typeSpeed: 55,
  backSpeed: 30,
  backDelay: 1400,
});

/*----Scroll Animation-----*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1200,
  reset: true,
});

sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.text-info', { delay: 200 });
sr.reveal('.text-btn', { delay: 250 });
sr.reveal('.social_icons', { delay: 300 });
sr.reveal('.featured-image', { delay: 200 });
sr.reveal('.top-header', {});
sr.reveal('.timeline-item', { interval: 150 });
sr.reveal('.project-card', { interval: 150 });
sr.reveal('.info-panel', { interval: 150 });

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '60px',
  duration: 1200,
  reset: true,
});
srLeft.reveal('.about-info', { delay: 100 });
srLeft.reveal('.contact-info', { delay: 100 });

const srRight = ScrollReveal({
  origin: 'right',
  distance: '60px',
  duration: 1200,
  reset: true,
});
srRight.reveal('.skill', { delay: 100 });
srRight.reveal('.form-control', { delay: 100 });

/*----active link on scroll-----*/
const sections = document.querySelectorAll('.section[id], .featured-box[id]');
const navLinks = document.querySelectorAll('.nav-link');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute('id');
    const link = document.querySelector('.nav-link[href="#' + sectionId + '"]');

    if (!link) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);
