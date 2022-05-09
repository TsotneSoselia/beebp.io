
document.addEventListener("DOMContentLoaded", function(event){
 
  /********Header On Scroll *********/
  let header = document.querySelector('.header'); //create ცვლადი. document.querySelectro('header') მივწვდი ამ კლასს html_ში(lova day6 13:00)
  let headerHeight = header.clientHeight; //ჰედერის სიმაღლე განვსაზღვრე

  window.onscroll = function(){ // window.onscroll = სქროლვისას
  if(window.pageYOffset > headerHeight){ //window.pageYOffset თუ ფანსჯირს სიმაღლე მეტი იქნება ჰედერის სიმაღლეზე
    header.classList.add('fixed'); //ჰედერს დაუმატე კიდე კლასი fixed. ეგ კლასი გავსტილე css_ში
  }else{
    header.classList.remove('fixed') //თუ არადა მოაშორე
  }
}

/******Burger Menu********/

let headerBurger = document.querySelector('.header_burger');
let menu = document.querySelector('.menu');
let body = document.querySelector('body');
headerBurger.onclick = function(){
  headerBurger.classList.toggle('active');//toggle = ამატებს ერთხელ დაჭერაზე, მეორეზე თიშავს
  menu.classList.toggle('active');
  body.classList.toggle('no-scroll');
}


/******Reviews Slider********/
    $('.reviews_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 1000,
    });

  });

/*ამ კოდით გაკეთებულია სლაიდერი*/
