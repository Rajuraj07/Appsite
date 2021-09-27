$(document).ready(function(){
// navbar shirnk
$(window).on("scroll",function(){
if($(this).scrollTop() > 90){
$(".navbar").addClass("navbar-shrink");
}
else{
$(".navbar").removeClass("navbar-shrink");
}
});
// video popup
const videoSrc = $("#player-1").attr("src");
$(".video-play-btn, .video-popup").on("click", function (){
if($(".video-popup").hasClass("open")){
$(".video-popup").removeClass("open");
$("#player-1").attr("src","");
}
else{
$(".video-popup").addClass("open");
if($("#player-1").attr("src")==''){
$("#player-1").attr("src",videoSrc);
}
}
});
// features carousel section
$('.features-carousel').owlCarousel({
loop:true,
margin:0,
autoplay:true,
responsiveClass:true,
responsive:{
0:{
items:1,
},
600:{
items:2,
},
1000:{
items:3,
}
}
});
// screenshot carousel section
$('.screenshots-carousel').owlCarousel({
loop:true,
margin:0,
autoplay:true,
responsiveClass:true,
responsive:{
0:{
items:1,
},
600:{
items:2,
},
1000:{
items:4,
}
}
});
// Testimonial carousel section
$('.testimonials-carousel').owlCarousel({
loop:true,
margin:0,
autoplay:true,
responsiveClass:true,
responsive:{
0:{
items:1,
},
600:{
items:2,
},
1000:{
items:3,
}
}
});
// Team  carousel section
$('.team-carousel').owlCarousel({
loop:true,
margin:0,
autoplay:true,
responsiveClass:true,
responsive:{
0:{
items:1,
},
600:{
items:2,
},
1000:{
items:3,
}
}
});
//Pages Scrolling - ScriollIt
$.scrollIt({
topOffset: -50
});
// navbar collapse - for responsive
$(".nav-link").on("click",function() {
$(".navbar-collapse").collapse("hide");
});
// Toggle theme -  light & dark mood
function toggleTheme(){
if(localStorage.getItem("shala-theme") !== null){
if(localStorage.getItem("shala-theme") === "dark"){
$("body").addClass("dark");
}
else{
$("body").removeClass("dark");
}
}
updateIcon();
}
toggleTheme();

$(".toggle-theme").on("click", function(){
$("body").toggleClass("dark");
if($("body").hasClass("dark")){
localStorage.setItem("shala-theme","dark");
}
else{
localStorage.setItem("shala-theme","light");
}
updateIcon();
});
function updateIcon(){
if($("body").hasClass("dark")){
$(".toggle-theme i").removeClass("fa-moon");
$(".toggle-theme i").addClass("fa-sun");
}
else{
$(".toggle-theme i").removeClass("fa-sun");
$(".toggle-theme i").addClass("fa-moon");
}
}
/*------------------
back to top
------------------*/
$(document).on('click', '.back-to-top', function() {
$("html,body").animate({
scrollTop: 0
}, 2000);
});

$(window).on('load', function() {
    /*-----------------
        back to top
    ------------------*/
    var backtoTop = $('.back-to-top')
    backtoTop.fadeOut();

});

});

//define variable for store last scrolltop
    var lastScrollTop = '';

    $(window).on('scroll', function() {

        //back to top show/hide
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
});