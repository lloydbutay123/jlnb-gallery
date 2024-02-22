$(document).ready(function(){
    var current_img;
    
    $(".img-fluid").on("click", function(){
        var src = $(this).attr("src");
        current_img = $(this).parent();
        $("#frame img").attr("src", src);
        $("#overlay").fadeIn();
        $(".button-container").fadeIn();
        $("#frame").fadeIn();
        $(".right").fadeIn();
        $(".left").fadeIn();

    });

    $(".fa-xmark").on("click", function() {
        $("#frame").fadeOut();
        $("#overlay").fadeOut();
        $(".button-container").fadeOut();
        $(".right").fadeOut();
        $(".left").fadeOut();
    })


    $(".right").on("click", function(){

        if(current_img.is(":last-child")) {
            var next_img = $("#frame img").first();

        } else { 
            var next_img = current_img.next();
        }

        var next_src = next_img.children("img").attr("src");
        $("#frame img").attr("src", next_src);
        current_img = next_img;

    });

    $(".left").on("click", function() {
        var pre_img = current_img.prev();
        var pre_src = pre_img.children("img").attr("src");
        $("#frame img").attr("src", pre_src);
        current_img = pre_img;

    })
    
});