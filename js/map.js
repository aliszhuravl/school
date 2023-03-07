//Map desktop
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),

        objectManager = new ymaps.ObjectManager({
            clusterize: false,
            gridSize: 32,
            clusterDisableClickZoom: true,
        });

    objectManager.objects.options.set({
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark-dark.svg',
        iconImageSize: [58, 83],
        // iconImageOffset: [-3, -42]
    });

    objectManager.objects.events.add('add', function () {
        objectManager.objects.setObjectOptions(0, {
            iconImageHref: 'img/placemark.svg',
        });
    });

    var previous = 0;

    $('.js-centers-akkordion .ac').on('click', function (){
        var objectId = $(this).data('id-icon')

        if($(this).hasClass('is-active')){
            objectManager.objects.setObjectOptions(objectId, {
                iconImageHref: 'img/placemark.svg',
            });
        }else{
            objectManager.objects.setObjectOptions(objectId, {
                iconImageHref: 'img/placemark-dark.svg',
            });
        }

        if(previous !== objectId){
            objectManager.objects.setObjectOptions(previous, {
                iconImageHref: 'img/placemark-dark.svg',
            });
            previous = objectId
        }

    })


    myMap.geoObjects.add(objectManager)
    myMap.behaviors.disable('scrollZoom');


    var data = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "id": 0,
                "geometry": {"type": "Point", "coordinates": [55.831903, 37.411961]},
                "properties": {
                    // "balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
                    // "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
                    // "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
                    // "clusterCaption": "<strong><s>Еще</s> одна</strong> метка",
                    // "hintContent": "<strong>Текст  <s>подсказки</s></strong>"
                }
            },
            {
                "type": "Feature",
                "id": 1,
                "geometry": {"type": "Point", "coordinates": [55.763338, 37.565466]},
                "properties": {
                    // "balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
                    // "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
                    // "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
                    // "clusterCaption": "<strong><s>Еще</s> одна</strong> метка",
                    // "hintContent": "<strong>Текст  <s>подсказки</s></strong>"
                }
            },
            {
                "type": "Feature",
                "id": 2,
                "geometry": {"type": "Point", "coordinates": [55.863338, 37.665466]},
                "properties": {
                    // "balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
                    // "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
                    // "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
                    // "clusterCaption": "<strong><s>Еще</s> одна</strong> метка",
                    // "hintContent": "<strong>Текст  <s>подсказки</s></strong>"
                }
            },
            {
                "type": "Feature",
                "id": 3,
                "geometry": {"type": "Point", "coordinates": [55.683338, 37.665466]},
                "properties": {
                    // "balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
                    // "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
                    // "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
                    // "clusterCaption": "<strong><s>Еще</s> одна</strong> метка",
                    // "hintContent": "<strong>Текст  <s>подсказки</s></strong>"
                }
            },
        ]
    }

    objectManager.add(data);
}




//Map mobile
var mapMobile = $('.centers-map-mobile');

function render_map($el){
    ymaps.ready(initMobileMap);

    function initMobileMap() {
        var myMap = new ymaps.Map($el[0], {
                center: $el.data('center') ? $el.data('center') : [55.76, 37.64],
                zoom: $el.data('zoom') ? $el.data('zoom') : 10
            }),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: '',
                balloonContent: ''
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/placemark.svg',
                iconImageSize: [48, 73],
                // iconImageOffset: [-5, -38]
            })

        myMap.geoObjects.add(myPlacemark)

        myMap.behaviors.disable('drag');
        myMap.behaviors.disable('scrollZoom');
    }
}

if (mapMobile.length) {
    mapMobile.each(function () {

        render_map($(this));

    });

}
