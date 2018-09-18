init();

// default variables


function init () {
    // animation variables
    const titlePageOne = document.querySelector('.page-one-title-animate');
    const titleTextPageOne = document.querySelector('.page-one-body-animate');

    const titlePageTwo = document.querySelector('.page-two-title-animate');
    const titleTextPageTwo = document.querySelector('.page-two-body-animate');
    const titlePageThree = document.querySelector('.page-three-title-animation');
    const titleBodyPageThree = document.querySelector('.page-three-title-body-animate');
    const titleFooterPageThree = document.querySelector('.page-three-title-footer-animate');
    const titlePageFour = document.querySelector('.page-four-title-animate');
    const titlePageFourBody = document.querySelector('.page-four-title-body-animation');
    const titlePageFourFooter = document.querySelector('.page-four-up-animation');


    $('#fullpage').fullpage({
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        
            afterLoad: function(anchorLink, index){
                var loadedSection = $(this);

                if(index == 1) {
                    titlePageOne.classList.add('animate-page-title');
                    titleTextPageOne.classList.add('animate-two');
                } else if(index == 2) {
                    titlePageTwo.classList.add('animate-page-title');
                    titleTextPageTwo.classList.add('animate-two');
                } else if(index == 3) {
                    titlePageThree.classList.add('animate-page-title-no-delay');
                    titleBodyPageThree.classList.add('animate-two-delay');
                    titleFooterPageThree.classList.add('animate-two');
                } else if(index == 4) {
                    titlePageFour.classList.add('animate-two-down');
                    titlePageFourBody.classList.add('animate-two');
                    titlePageFourFooter.classList.add('animate-up');
                }

            },
            onLeave: function(index, nextIndex, direction) {
                var leavingSection = $(this);

                if(index == 1 && direction =='down') {
                    titlePageOne.classList.remove('animate-page-title');
                    titleTextPageOne.classList.remove('animate-two');
                } else if(index == 2 && direction == 'down' || direction == 'up') {
                    titlePageTwo.classList.remove('animate-page-title');
                    titleTextPageTwo.classList.remove('animate-two');
                }
            }
    });
};





