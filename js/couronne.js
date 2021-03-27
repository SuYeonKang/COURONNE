$(document).ready(function(){

    activeNav();
    scrollActive();
    scrollify();
    fadeIn();
    mui();
});


function activeNav(){
    var navMenu = $("header nav ul li");

    $(navMenu).click(function(){

        $(navMenu).removeClass("active");
        $(this).addClass("active");
    });
}

function scrollActive(){
    var $menu = $("header nav ul li"),
        $contents = $(".wrap > section");

    $(window).scroll(function(){
        // var position = $(this).scrollTop(); 

        $contents.each(function(){
            // var sectionHeight = $(this).offset().top;

            if($(this).offset().top <= $(window).scrollTop()){
                // var idx = $(this).attr("id");
                var idx = $(this).index();

                $menu.removeClass("active");
                $menu.eq(idx).addClass("active");
            }
        });
    });
}


function scrollify() {
    $.scrollify({
        section: ".panel",
        scrollbars: false,
        before: function (i, panels) {
            var ref = panels[i].attr("data-section-name");

            $(".pagination .active").removeClass("active");

            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender: function () {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".panel").each(function (i) {
                activeClass = "";
                if (i === 0) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });

            pagination += "</ul>";

            $(".main").append(pagination);
        }
    });
}

function fadeIn(){
    $(window).scroll(function(){
        $(".fade").each(function(){
            var object = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).height();

            if(windowBottom > object/2){
                $(this).animate({"opacity":"1"},1000);
            }
        });
    });
}

function mui(){
    $(".mui").click(function(){
        $(".muiContainer").toggleClass("active");
    });
}