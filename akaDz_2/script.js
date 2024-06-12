const guess = function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    function guessNumber() {
        let userGuess = prompt("Угадай число от 1 до 100");

        if (userGuess === null) {
            alert("Игра окончена");
            return;
        }

        userGuess = parseInt(userGuess, 10);

        if (isNaN(userGuess)) {
            alert("Введи число!");
            guessNumber();
            return;
        }
        if (userGuess > randomNumber) {
            alert("Загаданное число меньше");
            guessNumber();  // Рекурсия: снова просим ввести число
        } else if (userGuess < randomNumber) {
            alert("Загаданное число больше");
            guessNumber();  // Рекурсия: снова просим ввести число
        } else {
            alert("Поздравляю, Вы угадали!!!");
        }
    }

    // Начинаем игру
    guessNumber();
};

guess();