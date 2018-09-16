

const title = document.querySelector('.animate-title');
const pageOne = document.querySelector('#page-one');
const pageTwo = document.querySelector('#page-two');
const pageThree = document.querySelector('#page-three');
const pageFour = document.querySelector('#page-four');
const pageFive = document.querySelector('#page-five');


title.classList.add('animate-page-one-title');

const menuContact = document.querySelector('.menu-item-contact');

const contactPage = document.querySelector('#page-five');

menuContact.addEventListener('click', function (e){
    e.preventDefault();
    pageFive.scrollIntoView({
        behavior: 'smooth'
    });
});

// testing out scrolling actions

// window.scrollY tells us the scroll position
// element.getBoundingClientRect() can give us position based on viewport

// scrollIntoView takes us to element





