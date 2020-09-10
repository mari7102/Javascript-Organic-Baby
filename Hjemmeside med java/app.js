const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


   burger.addEventListener('click', () => { 

 //Toggle Nav
    burger.addEventListener('click', () =>{
       nav.classList.toggle('nav-active');
    });



    //Animat Links
      navLinks.forEach((link, index) => {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;

        });

          //Burger Animation
          burger.classList.toggle('toogle');
     });
}


navSlide();

