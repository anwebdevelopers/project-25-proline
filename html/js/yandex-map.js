$(function() {


	//Яндекс карта

	ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [57.63241268692791,39.872126604997625],
                zoom: 17,
                controls: ['zoomControl'],
                behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]
            }, {
                searchControlProvider: 'yandex#search'
            });
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: '',
                balloonContent: ''
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/favicon/icon-map.png',
                // Размеры метки.
                iconImageSize: [25, 36],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-12.5, -36]
            });
        $(window).resize(function() {
            var w = $(window).width();
            if (w < 768) {
                myMap.behaviors.disable('drag');
            } else {
                myMap.behaviors.enable('drag');
            }
        });

        myMap.geoObjects.add(myPlacemark);
    });

});
