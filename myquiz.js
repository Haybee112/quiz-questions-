document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', function() {
        var score = 0;

        // Question 1
        var q1Answer = document.querySelector('input[name="q1"]:checked');
        if (q1Answer) {
            if (q1Answer.value === 'b') {
                score++;
            }
        }

        // Question 2
        var q2Answer = document.querySelector('input[name="q2"]:checked');
        if (q2Answer) {
            if (q2Answer.value === 'c') {
                score++;
            }
        }

        // Question 3
        var q3Answer = document.querySelector('input[name="q3"]:checked');
        if (q3Answer) {
            if (q3Answer.value === 'b') {
                score++;
            }
        }

        // Question 4
        var q4Answer = document.querySelector('input[name="q4"]:checked');
        if (q4Answer) {
            if (q4Answer.value === 'a') {
                score++;
            }
        }

        // Question 5
        var q5Answer = document.querySelector('input[name="q5"]:checked');
        if (q5Answer) {
            if (q5Answer.value === 'b') {
                score++;
            }
        }

        // Question 6
        var q6Answer = document.querySelector('input[name="q6"]:checked');
        if (q6Answer) {
            if (q6Answer.value === 'b') {
                score++;
            }
        }

        // Question 7
        var q7Answer = document.querySelector('input[name="q7"]:checked');
        if (q7Answer) {
            if (q7Answer.value === 'b') {
                score++;
            }
        }

        // Question 8
        var q8Answer = document.querySelector('input[name="q8"]:checked');
        if (q8Answer) {
            if (q8Answer.value === 'b') {
                score++;
            }
        }

        // Question 9
        var q9Answer = document.querySelector('input[name="q9"]:checked');
        if (q9Answer) {
            if (q9Answer.value === 'c') {
                score++;
            }
        }

        // Display score
        var scoreDisplay = document.getElementById('score');
        scoreDisplay.textContent = 'Your score is: ' + score;
    });
});