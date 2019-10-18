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
                c: "Peter Pan"
            },
            answer: "a"
        }]

    var time = 31;
    var index = 0;
    var indexOfChoice = 0;
    var question = [];
    var choiceHolder = [];
    var choice = [];
    var sorted = false;
    var images = ['', '', '', '../assets/images/Alice_won.gif'];
    var win = false;
    var lost = false;
    var indexOfImage;

    var button = $('.btn');
    var container = $('.containerBox');
    var timer = $('<div></div>');
    var questionDiv = $('<div></div>');
    var choice1 = $('<div></div>');
    var choice2 = $('<div></div>');
    var choice3 = $('<div></div>');
    var gifs = $('<img>');
    var contButton = $('<button></button>');

    timer.attr('class', 'time');
    questionDiv.attr('class', 'question');
    choice1.attr('id', 'firstChoice');
    choice1.attr('class', 'choices');
    choice2.attr('class', 'choices');
    choice3.attr('class', 'choices');

    button.on('click', function () {
        button.remove();
        container.append(timer);
        play();
    });

    function play() {
        if (index > question.length) {
            endGame();
        }
        var countDown = setInterval(function () {
            time--;
            timer.text("Time Remaining: " + time);
            if (time <= 0) {
                clearInterval(countDown);
                endround();
            }
        }, 1000);
        for (let i = 0; i < questionsBox.length; i++) {
            question.push(questionsBox[i].question);
            for (letter in questionsBox[i].choices) {
                choiceHolder.push(questionsBox[i].choices[letter]);
            }
            choice.push(choiceHolder);
            choiceHolder = [];
        }
        sortedQuestions();

        questionDiv.text(question[index]);
        container.append(questionDiv);
        indexOfChoice = questionsBox.findIndex(x => x.question === question[index]);
        choice1.text("a: " + choice[indexOfChoice][0]);
        choice2.text("b: " + choice[indexOfChoice][1]);
        choice3.text("c: " + choice[indexOfChoice][2]);

        container.append(choice1);
        container.append(choice2);
        container.append(choice3);

        $('#firstChoice').on('click', function () {
            let questionAnswer = questionsBox[indexOfChoice].answer;
            if (questionAnswer === "a") {
                clearInterval(countDown);
                container.empty();
                win = true;
                indexOfImage = indexOfChoice * 2;
                endRound();
            } else {
                lost = true;
                indexOfImage = indexOfChoice * 2 + 1;
            }
        });;

    }

    function sortedQuestions() {
        if (sorted) {
            return;
        } else {
            question.sort(() => {
                return 0.5 - Math.random();
            });
            sorted = true;
        }

    }
    function endRound() {
        index++;
        time = 31;
        gifs.attr('src', images[indexOfChoice]);
        if (win) {
            win = false;
            container.append(gifs);
            play();
        }


    }

    function endGame() {

    }
});