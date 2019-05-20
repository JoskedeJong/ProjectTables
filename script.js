$(document).ready(function(){

    var counter = 1;
    
    // ('.carousel').jcarousel();
   

    $(".button").addClass("col-sm-4");                                      //add functionality to table-buttons

    $(".button").click(function(){                                          //add functionality to table-buttons
        $(".popField").css('display', 'block');
        $(".popField").css("background-color","rgb(203, 307, 008)");
    });

    $(".closeButton").click(function(){                                     //makes close-button close pop-up window
        counter = 1;
        $(".popField").css('display', 'none');
    });

    $(".forwardButton").click(function(){                                   //will eventually be used to make forward button progress through dynamically generated content 
        $(".popField").css("background-color","rgb(103, 507, 008)");
        var pickedUp = parseInt($(".hiddenCounter").text());
        console.log(pickedUp);
        $(".contentField").text(counter+" x "+pickedUp+" = "+(counter * pickedUp));
        counter++;
    });

    // $(".forwardButton").attr("onclick", "tableFunction("+id+")");

    for(x=1; x<=10; x++){                                                   
        var s = Math.random();                                              //randomly generate rotation and colour for background 
        var t = Math.random(); 
        var u = Math.round(Math.random()) * 2 - 1;
        $(".bg"+x).css("transform", "rotate("+(s*u*30)+"deg)");
        $(".bg"+x).css("background-color", "rgb(255, "+(s*253)+", "+(t*253)+")");
        $(".bg"+x).css("border", "4px solid rgb(215, "+((s*253)-40)+", "+((t*253)-40)+")");

        $("#tableOf"+x).attr("onclick", "idFunction("+x+")");               //makes buttons preform the idFuction with their x value as parameter
    }    
});

function idFunction(buttonId){
    var id = buttonId;
    $(".contentField").text("Lets start learning the table of "+buttonId+"!")
    $(".hiddenCounter").text(id);
}

// function tableFunction(id){
//     $(".contentField").text(counter+" x "+id+" = "+(counter * id));
//     id++;
// }
