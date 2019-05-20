$(document).ready(function(){

    $(".button").addClass("col-sm-4");                                          //add functionality to table-buttons

    $(".button").click(function(){                                          //add functionality to table-buttons
        $(".popField").css('display', 'block');
        // $(".popField").toggleFade("fast");
        // $(".popField").click(alert("blip"));
        $(".popField").css("background-color","rgb(203, 307, 008)");
    });

    $(".closeButton").click(function(){                                     //makes close-button close pop-up window
        $(".popField").css('display', 'none');
    });

    $(".forwardButton").click(function(){                                   //will eventually be used to make forward button progress through dynamically generated content 
        $(".popField").css("background-color","rgb(103, 507, 008)");
    });
    
    for(x=1; x<=10; x++){
        var r = Math.random(); 
        var s = Math.round(Math.random()) * 2 - 1
        console.log(s);
        $(".bg"+x).css("transform", "rotate("+(s*r*30)+"deg)");
    }    
});
