$(document).ready(function() {
    $(".accordion").on("click", ".accord-title", function() {
        $(this).toggleClass("active").next().slideToggle();
    });
    });