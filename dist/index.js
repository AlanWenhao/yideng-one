SystemJS.import('./dist/main.js').then(function(m) {
    $.extend({
        thumb: m.default.Thumb
    });
    var btn = new $.thumb({
        'limit': 10
    });
});