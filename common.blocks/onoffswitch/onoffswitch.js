$(".onoffswitch__button").click(function(){
    var themes = $(".theme");

    for (var i = 0; i < themes.length;i++){

        if ($(themes[i]).hasClass("theme_color_project-default")){
            $(themes[i]).removeClass("theme_color_project-default");
            $(themes[i]).addClass("theme_color_project-inverse");
        }
        else if ( $(themes[i]).hasClass("theme_color_project-inverse")){
            $(themes[i]).removeClass("theme_color_project-inverse");
            $(themes[i]).addClass("theme_color_project-default");
        }
        
    }
})  