$(document).ready(function(){
    
    $(".img-fluid").on("click", function(){
        var src = $(this).attr("src");
        $("#frame img").attr("src", src);
        $("#overlay").fadeIn();
        $("#frame").fadeIn();

    });

    $("#overlay").on("click", function(){
        $("#frame").fadeOut();
        $("#overlay").fadeOut();
    })
    
});