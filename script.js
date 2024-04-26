let randomNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 0;

document.getElementById('submitGuess').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guess').value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }
    attempts++;
    document.getElementById('attempts').textContent = attempts;
    provideFeedback(userGuess);
});

document.getElementById('reset').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('attempts').textContent = attempts;
    document.getElementById('feedback').textContent = '';
    document.getElementById('guess').value = '';
});

function provideFeedback(guess) {
    const feedback = document.getElementById('feedback');
    if (guess === randomNumber) {
        feedback.textContent = 'Congratulations! You got it right!';
    } else if (guess < randomNumber) {
        feedback.textContent = 'Too low!';
    } else {
        feedback.textContent = 'Too high!';
    }
}
