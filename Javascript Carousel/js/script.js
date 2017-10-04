
$(function() {
    $('.jcarousel')
        .jcarousel({
            // Core configuration goes here
        })
        .jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });
        $('.jcarousel-prev').jcarouselControl({ target: '-=1' });
        $('.jcarousel-next').jcarouselControl({ target: '+=1' });
        $('.jcarousel').jcarousel({ wrap: 'both' });

    $('select').selectBox();

    $('.dropdown').hover(
        function(){
            $(this).children('.submenu').stop(false, false).slideDown(200);
        },
        function(){
            $(this).children('.submenu').stop(false, false).slideUp(200);
        },
        function (){
            $('.test').animate({
                backgroundColor: "#fff"
            }, 200);
        }
    )

    $('.dropdown').hover(
        function (){
            $('.test').animate({backgroundColor: "#fff"}, 200).stop(false, false);
    })

});
