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

    var time = 31;
    var index = 0;
    var question = [];

    var button = $('.btn');
    var container = $('.container');
    var timer = $('<h2></h2>');
    var questionDiv = $('<div></div>');
    var choice1 = $('<div></div>');
    var choice2 = $('<div></div>');
    var choice3 = $('<div></div>');

    timer.attr('class', 'time');
    questionDiv.attr('class', 'question');

    button.on('click', function () {
        button.remove();
        container.append(timer);
        play();
    });

    function play() {
        var countDown = setInterval(function () {
            time--;
            timer.text("Time Remaining: " + time);
            if (time <= 0) {
                clearInterval(countDown);
                endRound();
            }
        }, 1000);
        for (let i = 0; i < questionsBox.length; i++) {
            question.push(questionsBox[i].question);
        }
        question.sort(() => {
            return 0.5 - Math.random();
        });
        questionDiv.text(question[index]);
        container.append(questionDiv);
    }
    function endRound() {

    }

});