;(function ($) {

    // slick slider
    $(document).ready(function(){
        $('.project-slider').slick({
            // arrows: true,
            autoplay: false,
            pauseOnHover: false,
            autoplaySpeed: 10000,
            dots: true,
            dotsClass: 'project-slider-dots',
            appendArrows: $('.project-slider-arrows'),
            prevArrow: $('.prev-project'),
            nextArrow: $('.next-project')
        });
    });

    // googleMap

    $(function () {
        var point = {lat: 48.7288991, lng: 37.5900043},
            map = new google.maps.Map(document.getElementById('googleMap'), {
                center: point,
                zoom: 15,
                // mapTypeId: 'hybrid',
                disableDefaultUI: false

            });
        var marker = new google.maps.Marker({
            position: {lat: 48.7288991, lng: 37.5929343},
            map: map
        });

    });

})(jQuery);