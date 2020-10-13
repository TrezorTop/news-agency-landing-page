$(document).ready(() => {

    $('.menu-btn').click(menuController);

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

        console.log('123')

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