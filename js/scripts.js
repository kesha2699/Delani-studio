$(document).ready(function(){
    $("#design-image").click(function(){
        $("#design-image").slideDown('1000').hide('1000');
        $("#design").show('1000');
    });
    $("#design").click(function(){
        $("#design").slideUp('1000');
        $("#design-image").slideDown('1000');
    });

    $("#development-image").click(function(){
        $("#development-image").slideDown('1000').hide('1000');
        $("#development").show('1000');
    });
    $("#development").click(function(){
        $("#development").slideUp('1000');
        $("#development-image").slideDown('1000');
    });

    $("#product-image").click(function(){
        $("#product-image").slideDown('1000').hide('1000');
        $("#product").show('1000');
    });
    $("#product").click(function(){
        $("#product").slideUp('1000');
        $("#product-image").slideDown('1000');
    });
});

$(document).ready(function(){
    $("#work4").mouseover(function(){
        $("#porttext4").show();
    }).mouseout(function(){
        $("#porttext4").hide();
    });
    $("#work3").mouseover(function(){
        $("#porttext3").show();
    }).mouseout(function(){
        $("#porttext3").hide();
    });
    $("#work2").mouseover(function(){
        $("#porttext2").show();
    }).mouseout(function(){
        $("#porttext2").hide();
    });
    $("#work1").mouseover(function(){
        $("#porttext1").show();
    }).mouseout(function(){
        $("#porttext1").hide();
    });
    $("#work5").mouseover(function(){
        $("#porttext5").show();
    }).mouseout(function(){
        $("#porttext5").hide();
    });
    $("#work6").mouseover(function(){
        $("#porttext6").show();
    }).mouseout(function(){
        $("#porttext6").hide();
    });
    $("#work7").mouseover(function(){
        $("#porttext7").show();
    }).mouseout(function(){
        $("#porttext7").hide();
    });
    $("#work8").mouseover(function(){
        $("#porttext8").show();
    }).mouseout(function(){
        $("#porttext8").hide();
    });
});
$(document).ready(function(){
    $("form#form").submit(function(event){
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#comment").val();
        if ($("input#name").val() && $("input#email").val()){
            alert (name + " we have received your message. Thank you for reaching out to us.");
        }
        else{
            alert("Please enter your name and email");
        }
    });
});
