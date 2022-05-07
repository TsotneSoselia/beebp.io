
document.addEventListener("DOMContentLoaded", function(event){
/* 
    
*/
 

  let header = document.querySelector('.header'); //create ცვლადი. document.querySelectro('header') მივწვდი ამ კლასს html_ში
  let headerHeight = header.clientHeight; //ჰედერის სიმაღლე განვსაზღვრე

  window.onscroll = function(){ // window.onscroll = სქროლვისას
  if(window.pageYOffset > headerHeight){ //window.pageYOffset თუ ფანსჯირს სიმაღლე მეტი იქნება ჰედერის სიმაღლეზე
    header.classList.add('fixed'); //ჰედერს დაუმატე კიდე კლასი fixed. ეგ კლასი გავსტილე css_ში
  }else{
    header.classList.remove('fixed') //თუ არადა მოაშორე
  }
}





    $('.reviews_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 1000,
    });

  });

/*ამ კოდით გაკეთებულია სლაიდერი*/
