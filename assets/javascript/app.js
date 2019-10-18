$(document).ready(function () {
    const questionsBox = [
        {
            question: "Cruella de Vil is the villain in which movie?",
            choices: {
                a: "Sleeping Beauty",
                b: "101 Dalmations",
                c: "Oliver and Company"
            },
            answer: "b"
        },
        {
            question: "In Finding Nemo, which country has Nemo been taken to?",
            choices: {
                a: "Austrailia",
                b: "Italy",
                c: "Germany"
            },
            answer: "a"
        },
        {
            question: "In Peter Pan, what did the crocodile swallow?",
            choices: {
                a: "A Hook",
                b: "Smee",
                c: "A clock"
            },
            answer: "c"
        },
        {
            question: "Which movie has the quote 'How does the smiling Crocodile improve his shining tail?'",
            choices: {
                a: "Alice in Wonderland",
                b: "Mary Poppins",
                c: ""
            },
            answer: "a"
        }]

    var time = 30;

    var button = $('.btn');
    var container = $('.container');
    var timer = $('<h2></h2>');

    timer.attr('class', 'time');

    button.on('click', function () {
        button.remove();
        container.append(timer);
        play();
    });

    function play() {
        var countDown = setInterval(function () {
            time--;
            timer.text(time);
            if (time <= 0) {
                clearInterval(countDown);
                endRound();
            }
        }, 1000);

    }
    function endRound() {

    }

});