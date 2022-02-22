$(document).ready(function(){ //$ = jQuery; .ready = will only run once page is ready
    $('nav').hide(); //finding and hiding nav element
    
    //setup click function
    $('.menu-button').click(function(){ //find class of menu-button, triggered by click
        $('nav').slideToggle(); //inside of function = interactivity
    }); 
}); 

