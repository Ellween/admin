$(document).ready(function(){
    $('.posts-click').click(function(){
        $('.posts-child').slideToggle();
        $('.fa-chevron-down').toggleClass('active');
    });
});