$(document).ready(function(){

    // activeNav();
    scrollify();
    mui();
});


// function activeNav(){
//     $("header nav ul li a").click(function(){
//         $(this).addClass("active");
//     });
// }

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

function mui(){
    $(".mui").click(function(){
        $(".muiContainer").toggleClass("active");
    });
}