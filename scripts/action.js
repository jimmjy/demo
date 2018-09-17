// default variables
console.log('working');
const contactButton = document.querySelector('#contact-click');
const title = document.querySelector('.page-one-title-animate');
const titleText = document.querySelector('.animate-two');
const pageFive = document.querySelector('#page-five');

// // contact click 
// contactButton.addEventListener('click', () => {
//     location.href = '../index.html';
// });


// test animations
title.classList.add('animate-page-one-title');
titleText.classList.add('.animate-two');


const menuContact = document.querySelector('.menu-item-contact');

const contactPage = document.querySelector('#page-five');

menuContact.addEventListener('click', function (e){
    e.preventDefault();
    pageFive.scrollIntoView({
        behavior: 'smooth'
    });
});






