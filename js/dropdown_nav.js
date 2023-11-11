$(document).ready(function(){
    $("#nav ul.sub").hide();
    $("#nav ul.menu li").click(function(){
        $("ul",this).slideToggle("fast");
    });
});