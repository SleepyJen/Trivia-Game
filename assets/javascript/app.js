$(document).ready(function () {
    var time = 5;

    var button = $('.btn');
    var container = $('.container');
    var timer = $('<h2></h2>');

    timer.attr('class', 'time');

    button.on('click', function () {
        button.remove();
        container.append(timer);
        var countDown = setInterval(function () {
            time--;
            timer.text(time);
            if (time <= 0) {
                clearInterval(countDown);
            }
        }, 1000);

    });

});