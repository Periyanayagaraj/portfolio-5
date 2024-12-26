
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Get all icons by class name
const h1 = document.getElementById('h1')
const p = document.getElementById('p')

document.getElementById('html').addEventListener('click', function () {
    h1.innerText = "HTML"
    h1.style.color = "rgb(255, 102, 0)"
    p.innerText = "The foundation of the web, and I like to keep my structures sturdy. I've always said, 'Life without HTML is like writing a story without words.' 😊"
})
document.getElementById('css').addEventListener('click', function () {
    h1.innerText = "CSS"
    h1.style.color = "rgb(0, 106, 255)"
    p.innerText = "Styling isn't just for fashion; it's for websites too! My CSS skills are so sharp, I sometimes wonder if I missed my calling as a stylist. 👌"
})
document.getElementById('tw').addEventListener('click', function () {
    h1.innerText = "Tailwind"
    h1.style.color = "rgb(18, 160, 255)"
    p.innerText = "Some need a compass to navigate, I just need my Tailwind. Building responsive designs faster than the wind can blow. 👍"
})
document.getElementById('js').addEventListener('click', function () {
    h1.innerText = "JavaScript"
    h1.style.color = "rgb(217, 255, 0)"
    p.innerText = "While some are searching for the meaning of life, I'm here searching for the missing semicolon. JS keeps me on my toes, ensuring I never miss a beat (or a bracket). 🙂"
})
document.getElementById('threejs').addEventListener('click', function () {
    h1.innerText = "Three.js"
    h1.style.color = " rgb(0, 255, 60)"
    p.innerText = "'The canvas of the digital world, and I love to bring 3D creations to life. I've always said, 'Life without Three.js is like a picture without depth.'' 😯"
})
document.getElementById('git').addEventListener('click', function () {
    h1.innerText = "Git Hub"
    h1.style.color = "rgb(179, 0, 255)"
    p.innerText = "I'm so in sync with Git, every time I commit, even my coffee knows it's time for a break. And remember, always be committing! 😇"
})
document.getElementById('py').addEventListener('click', function () {
    h1.innerText = "Python"
    h1.style.color = "rgb(18, 160, 255)"
    p.innerText = "'The backbone of modern programming, and I love to keep my logic clean. I've always said, 'Life without Python is like solving problems without tools.'' 🙂"
})
document.getElementById('dj').addEventListener('click', function () {
    h1.innerText = "Django"
    h1.style.color = "rgb(0, 190, 13)"
    p.innerText = "'The framework for perfectionists with deadlines, and I strive to build seamless web applications. I've always said, 'Life without Django is like having a canvas without a brush.'' 😎"
})
document.getElementById('mysql').addEventListener('click', function () {
    h1.innerText = "MySql"
    h1.style.color = "rgb(0, 153, 255)"
    p.innerText = "Whenever data gets rowdy, I use MySQL to keep things structured. Tables turn, queries fly, but with MySQL, my data's never shy. Remember, when it comes to databases, I've always got the right joins and relations! 😉"
})

    const icon = document.querySelectorAll('.slideicon');
    const dynamicText = document.querySelector('.dynamic-text');

    icon.forEach(icon => {
        icon.addEventListener('click', () => {
            dynamicText.classList.add('slideanimaction');  

            setTimeout(() => {
                dynamicText.classList.remove('slideanimaction');
              }, 1000);
        }, );
      });
