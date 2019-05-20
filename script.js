$(document).ready(function(){

    
    // ('.carousel').jcarousel();
   

    $(".button").addClass("col-sm-4");                                      //add functionality to table-buttons

    $(".button").click(function(){                                          //add functionality to table-buttons
        $(".popField").css('display', 'block');
        $(".popField").css("background-color","rgb(203, 307, 008)");
    });

    $(".closeButton").click(function(){                                     //makes close-button close pop-up window
        $(".popField").css('display', 'none');
    });

    $(".forwardButton").click(function(){                                   //will eventually be used to make forward button progress through dynamically generated content 
        $(".popField").css("background-color","rgb(103, 507, 008)");
    });

    for(x=1; x<=10; x++){                                                   
        var s = Math.random();                                              //randomly generate rotation and colour for background 
        var t = Math.random(); 
        var u = Math.round(Math.random()) * 2 - 1
        console.log(s);
        $(".bg"+x).css("transform", "rotate("+(s*u*30)+"deg)");
        $(".bg"+x).css("background-color", "rgb(255, "+(s*255)+", "+(t*255)+")");
        console.log(x);

        $("#tableOf"+x).attr("onclick", "idFunction("+x+")");
    }    

    // document.getElementById(x).setAttribute("onclick", "function("+x+")");
});

function idFunction(id){
    alert ("this button  is "+id);
}
