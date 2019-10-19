$(document).ready(function () {
    let questionsBox = [
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
        },
        {
            question: "Who played the original Mary Poppins?",
            choices: {
                a: 'Emily Blunt',
                b: 'Julie Andrews',
                c: 'Jodie Benson'
            },
            answer: "b"
        }]

    var time = 30;
    var index = 0;
    var indexOfChoice = 0;
    var question = [];
    var choiceHolder = [];
    var choice = [];
    var sorted = false;
    var images = ['../../assets/images/101Dalmation_won.gif', '../../assets/images/101Dalmation_lost.gif',
        '../../assets/images/FindingNemo_won.gif', '../../assets/images/FindingNemo_lost.gif',
        '../../assets/images/PeterPan_won.gif', '../../assets/images/PeterPan_lost.gif',
        '../../assets/images/Alice_won.gif', '../../assets/images/Alice_lost.gif',
        '../../assets/images/MaryPoppins_won.gif', '../../assets/images/MaryPoppins_lost.gif'];
    var win = false;
    var indexOfImage;
    var winScore = 0;

    var button = $('.btn');
    var container = $('.containerBox');
    var timer = $('<div>');
    var questionDiv = $('<div>');
    var choice1 = $('<div>');
    var choice2 = $('<div>');
    var choice3 = $('<div>');
    var gifs = $('<img>');
    var contButton = $('<button>');
    var end = $('<div>');

    end.attr('class', 'end');

    timer.attr('class', 'time');
    questionDiv.attr('class', 'question');
    choice1.attr('id', 'firstChoice');
    choice2.attr('id', 'secondChoice');
    choice3.attr({ id: 'thridChoice', class: 'choices' });

    choice1.attr('class', 'choices');
    choice2.attr('class', 'choices');
    contButton.attr('class', 'btn2');

    button.on('click', function () {
        button.remove();
        play();
    });

    function play() {
        win = false;
        timer.text("Time Remaining: " + time);
        container.append(timer);

        var countDown = setInterval(function () {
            time--;
            timer.text("Time Remaining: " + time);
            if (time <= 0) {
                clearInterval(countDown);
                indexOfImage = indexOfChoice * 2 + 1;
                endRound();
            }
        }, 1000);

        sortedQuestions();
        if (index > question.length - 1) {
            clearInterval(countDown);
            endGame();
            return;
        }

        questionDiv.text(question[index]);
        container.append(questionDiv);
        indexOfChoice = questionsBox.findIndex(x => x.question === question[index]);
        choice1.text("a: " + choice[indexOfChoice][0]);
        choice2.text("b: " + choice[indexOfChoice][1]);
        choice3.text("c: " + choice[indexOfChoice][2]);

        container.append(choice1);
        container.append(choice2);
        container.append(choice3);

        $('#firstChoice').on('click', function (event) {
            // console.log(event.currentTarget);
            let questionAnswer = questionsBox[indexOfChoice].answer;
            if (questionAnswer === "a") {
                clearInterval(countDown);
                win = true;
                winScore++;
                indexOfImage = indexOfChoice * 2;
                endRound();
            } else {
                clearInterval(countDown);
                indexOfImage = indexOfChoice * 2 + 1;
                endRound();
            }
        });

        $('#secondChoice').on('click', function () {
            let questionAnswer = questionsBox[indexOfChoice].answer;
            if (questionAnswer === "b") {
                clearInterval(countDown);
                win = true;
                winScore++;
                indexOfImage = indexOfChoice * 2;
                endRound();
            } else {
                clearInterval(countDown);
                indexOfImage = indexOfChoice * 2 + 1;
                endRound();
            }
        });

        $('#thridChoice').on('click', function () {
            let questionAnswer = questionsBox[indexOfChoice].answer;
            if (questionAnswer === "c") {
                clearInterval(countDown);
                win = true;
                winScore++;
                indexOfImage = indexOfChoice * 2;
                endRound();
            } else {
                clearInterval(countDown);
                indexOfImage = indexOfChoice * 2 + 1;
                endRound();
            }
        });

    }

    function sortedQuestions() {
        if (sorted) {
            return;
        } else {
            for (let i = 0; i < questionsBox.length; i++) {
                question.push(questionsBox[i].question);
                for (letter in questionsBox[i].choices) {
                    choiceHolder.push(questionsBox[i].choices[letter]);
                }
                choice.push(choiceHolder);
                choiceHolder = [];
            }
            question.sort(() => {
                return 0.5 - Math.random();
            });
            sorted = true;
        }

    }

    function endRound() {
        if (index > question.length - 1) {
            endGame();
        }
        gifs.attr({ src: images[indexOfImage], class: 'gifImage' });
        container.empty();
        index++;
        contButton.text('Continue');
        container.append(timer);
        container.append(gifs);
        container.append(contButton);
        if (win) {
            playAgain();
        } else {

            playAgain();
        }
    }

    function playAgain() {
        time = 10;

        timer.html("Time Remaining: " + time);
        var countdown2 = setInterval(function () {
            time--;
            if (win) {
                timer.html("Time Remaining: " + time + '<br> Very Nice!');
            } else {
                timer.html("Time Remaining: " + time + '<br> Sorry! The Correct Answer is: ' + questionsBox[indexOfChoice].choices[questionsBox[indexOfChoice].answer]);
            }
            if (time <= 0) {
                win = false;
                container.empty();
                clearInterval(countdown2);
                time = 30;
                play();
            }
        }, 1000);

        contButton.on('click', function () {
            clearInterval(countdown2);
            container.empty();
            time = 30;
            play();
        });
    }

    function endGame() {
        container.empty();
        end.html("Congratulations!! <br>Your Score is : " + winScore + "/5");
        container.append(end);
    }
});