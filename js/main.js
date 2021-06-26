$(document).ready(function() {
    $('.list_phone').hide();
    $(".show").click(function() {
        $(".list_phone").show();
        $(".hide").show();
        $('.show').hide();
    });
    $(".hide").click(function() {
        $(".list_phone").hide();
        $(".hide").hide();
        $('.show').show();
    });
});
$(document).ready(function() {
    $('a').on('click', function(e) {
        e.preventDefault();

        if ($('a').hasClass('active')) {

            $('a').removeClass('active')
            $(this).addClass('active')
        } {
            $(this).addClass('active')
        };

        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, 500, 'swing');
    });

    $(document).on("scroll", scrollpos);

    function scrollpos(event) {
        var scrollTop = $(document).scrollTop();
        $('.navigation-item a').each(function() {
            var currLink = $(this),
                refElement = $(currLink.attr('href'));
            navElementHight = $('.navigation-bar').outerHeight()
            if (refElement.position().top <= scrollTop + navElementHight && refElement.position().top + refElement.height() > navElementHight + scrollTop) {
                currLink.addClass('active')
            } else {
                currLink.removeClass('active')
            }
        })
    }
});