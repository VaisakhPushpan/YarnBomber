// carousel section

$(document).ready(function () {
    $('.owl-carousel1').owlCarousel({
        margin: 10,
        loop: true,
        autoWidth: true,
        items: 3,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
    });
    $('.owl-carousel2').owlCarousel({
        margin: 60,
        autoWidth: true,
    });
    $('.owl-carousel3').owlCarousel({
        autoWidth: true,
        margin: 10,
    })
    $('.owl-carousel4').owlCarousel({
        autoWidth: true,
        nav: false,
    })

})

// DROPDOWN MENU

function dropdown(e) {
    let div = document.querySelectorAll(".dropdown-menu");
    div[e].style.display = "block";
}
function undrop(e) {
    let div = document.querySelectorAll(".dropdown-menu");
    div[e].style.display = "none";
}

// searchbar

function searchMouse() {
    let fa = document.querySelector(".right-side-option-bar");
    let div = document.querySelector(".search-bar");
    div.style.right = "210px";
    div.style.zIndex = "5"
    div.style.background = "rgb(230, 230, 230)"
    div.style.width = "20%"
    div.style.paddingLeft = "10px"
}
function SearchMouseOut() {
    let div = document.querySelector(".search-bar");
    div.style.right = "230px";
    div.style.zIndex = "0";
    div.style.background = "rgba(255,255,255)"
    div.style.width = "0"
}


// responsivenav bar 

let bar = document.querySelector(".barse");
let arrow = document.querySelector(".fa-arrow-left");
bar.addEventListener("click" , ()=>{
    window.scrollTo(0,0);
    let div = document.querySelector(".responsive-nav-bar");
    div.style.left = "0";
})
arrow.addEventListener("click" ,()=>{
    let div = document.querySelector(".responsive-nav-bar");
    div.style.left = "-1000px"
})


// outof stock

document.querySelectorAll(".outof").forEach((e)=>{
    e.addEventListener("click", (e)=>{
        e.preventDefault();
        alert("This Item Is Currrently OutOfStock")
    })
})


