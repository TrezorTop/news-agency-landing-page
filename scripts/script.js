$(document).ready(() => {

    setInterval(timeAndDateController, 500)

    $('.menu-btn').click(menuController);

    function timeAndDateController() {
        var nowTimeFormatted = new Date().toLocaleTimeString().slice(0, -3);
        $('.time-span').text(nowTimeFormatted);

        var nowDateFormatted = new Date().toLocaleDateString();
        $('.date-span').text(nowDateFormatted);
        $('.time-span').text(nowTimeFormatted);

        var nowDateMobileFormatted = new Date().toLocaleDateString().slice(0, -5);
        $('.date-span-mobile').text(nowDateMobileFormatted);
    }

    function menuController() {
        if ($('.menu-btn').hasClass('active')) {
            $('nav').slideToggle(500);
        } else {
            $('nav').slideToggle(500);
        }

        $('.menu-btn').toggleClass('active')
    }

    $('#search-btn').click(searchController)

    function searchController() {

        $('#search-btn').toggleClass('active');

        if ($('#search-btn').hasClass('active')) {
            $('.logo , .menu-btn').fadeOut(400, function () {
                $('#search-btn').animate({
                    'width': '100%',
                    'padding': '0 42px 0 21px',
                    'backgroundColor': '#ebebeb',
                }, 400)
            });
        } else {
            $('#search-btn').animate({
                'width': '0px',
                'padding': '0 8px',
                'backgroundColor': 'unset',
            }, 400, function () {
                $('.logo , .menu-btn').fadeIn(400, function () {});
            })
        }
    }
});