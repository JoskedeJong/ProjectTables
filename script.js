$(document).ready(function(){

    $(".button").click(function(){
        $(".popField").css('display', 'block');
        // $(".popField").toggleFade("fast");
        // $(".popField").click(alert("blip"));
        $(".popField").css("background-color","rgb(203, 307, 008)");
    });

    $(".closeButton").click(function(){
        $(".popField").css('display', 'none');
    });

    $(".forwardButton").click(function(){
        $(".popField").css("background-color","rgb(103, 507, 008)");
    });
});
