$(document).ready(function() {
    goTop();
    onclick1();

    window.onscroll = function() {
        goTop();
    }
});
//点击  返回顶部
function onclick1() {
    $("span.top").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 700);
    });
}

function goTop() {
    var scrollHeight = $(window).scrollTop();
    if (scrollHeight > 100) {
        $(".top").css("display", "block");
    } else {
        $(".top").css("display", "none");
    }
}