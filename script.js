// SHOW OR HIDE PASSWORD

function togglePassword() {

    let input = document.getElementById("password");

    input.type =
        input.type === "password" ? "text" : "password";

}


// RANDOM PERCENTAGE

function randomPercentage(values) {

    let random = new Uint32Array(1);

    crypto.getRandomValues(random);

    return values[random[0] % values.length];

}


// CHECK PASSWORD

function checkPassword() {

    let password =
        document.getElementById("password").value;

    if (password.length === 0) {

        alert("Please enter a password!");

        return;
    }

    if (password.length > 12) {

        alert("Invalid password! Use a maximum of 12 characters.");

        return;
    }

    let length = password.length;

    let special =
        (password.match(/[^A-Za-z0-9]/g) || []).length;

    let numbers =
        (password.match(/[0-9]/g) || []).length;

    let letters =
        (password.match(/[A-Za-z]/g) || []).length;

    let percentage;

    // RULE 1: ONE CHARACTER

    if (length === 1) {

        percentage = randomPercentage([
            0, 1, 2, 3, 4, 5
        ]);

    }

    // RULE 2: TWO CHARACTERS

    else if (length === 2) {

        percentage = randomPercentage([
            6, 7, 8, 9, 10
        ]);

    }

    // RULE 3: THREE CHARACTERS

    else if (length === 3) {

        percentage = randomPercentage([
            12, 13, 14, 15, 16
        ]);

    }

    // RULE 4: FOUR CHARACTERS

    else if (length === 4) {

        percentage = randomPercentage([
            17, 18, 20, 22, 24, 25, 26, 27, 28, 29
        ]);

    }

    // RULE 5: FIVE CHARACTERS

    else if (length === 5) {

        percentage = randomPercentage([
            32, 33, 34, 35, 36, 37, 38, 39, 40
        ]);

    }

    // RULE 6: SIX CHARACTERS
    // 4 ALPHABETS + 1 SPECIAL + 1 NUMBER

    else if (
        length === 6 &&
        letters === 4 &&
        special === 1 &&
        numbers === 1
    ) {

        percentage = randomPercentage([
            50, 54, 55, 59, 63, 65, 68, 70
        ]);

    }

    // RULE 7: SEVEN CHARACTERS
    // 5 ALPHABETS + 1 SPECIAL + 1 NUMBER

    else if (
        length === 7 &&
        letters === 5 &&
        special === 1 &&
        numbers === 1
    ) {

        percentage = randomPercentage([
            50, 54, 55, 59, 63, 65, 68, 70
        ]);

    }

    // RULE 8: EIGHT TO TEN CHARACTERS
    // 6, 7 OR 8 ALPHABETS + 1 NUMBER + 1 SPECIAL

    else if (
        (length === 8 || length === 9 || length === 10) &&
        (letters === 6 || letters === 7 || letters === 8) &&
        numbers === 1 &&
        special === 1
    ) {

        percentage = randomPercentage([
            53, 54, 55, 56, 59
        ]);

    }

    // RULE 9: TEN CHARACTERS

    else if (length === 10) {

        percentage = randomPercentage([
            62, 65, 63, 67, 68, 69
        ]);

    }

    // NEW STRONG RULE: ELEVEN CHARACTERS
    // ONE NUMBER OR ONE SPECIAL CHARACTER

    else if (
        length === 11 &&
        (numbers === 1 || special === 1)
    ) {

        percentage = randomPercentage([
            90, 93, 94, 95, 96, 97
        ]);

    }

    // RULE 10: ELEVEN CHARACTERS

    else if (length === 11) {

        percentage = randomPercentage([
            70, 71, 73, 75, 77, 78, 79
        ]);

    }

    // RULE 11: TWELVE CHARACTERS
    // 10 ALPHABETS + 1 SPECIAL + 1 NUMBER = 100%

    else if (
        length === 12 &&
        letters === 10 &&
        special === 1 &&
        numbers === 1
    ) {

        percentage = 100;

    }

    // RULE 12: TWELVE CHARACTERS
    // 9 OR 10 ALPHABETS + 1 OR 2 NUMBERS + 1 SPECIAL

    else if (
        length === 12 &&
        (letters === 9 || letters === 10) &&
        (numbers === 1 || numbers === 2) &&
        special === 1
    ) {

        percentage =
            Math.floor(Math.random() * 14) + 85;

    }

    // OTHER PASSWORDS

    else {

        percentage = randomPercentage([
            23, 25, 28, 29, 33, 34, 35,
            40, 44, 45, 47, 48, 49
        ]);

    }


    // STRENGTH AND COLOUR

    let strength;
    let color;
    let background;
    let className;

    if (percentage >= 86) {

        strength = "STRONG";
        color = "#00ff00";
        background = "#008000";
        className = "strong";

    }

    else if (percentage >= 50) {

        strength = "MODERATE";
        color = "#ff8c00";
        background = "#ff8c00";
        className = "moderate";

    }

    else {

        strength = "WEAK";
        color = "#ffff00";
        background = "#ffff00";
        className = "weak";

    }


    // DISPLAY RESULT

    let result = document.getElementById("result");

    result.innerHTML = strength;

    result.className = className;


    // DISPLAY PERCENTAGE

    let percentageBox =
        document.getElementById("percentage");

    percentageBox.innerHTML = percentage + "%";

    percentageBox.style.color = color;


    // PROGRESS BAR

    let bar = document.getElementById("bar");

    bar.style.width = percentage + "%";

    bar.style.background = background;


    // SUGGESTIONS

    let suggestions = [];

    if (length < 8)
        suggestions.push("Use at least 8 characters.");

    if (special === 0)
        suggestions.push("Add special characters.");

    if (numbers === 0)
        suggestions.push("Include numbers.");

    if (letters === 0)
        suggestions.push("Include letters.");

    document.getElementById("suggestions").innerHTML =
        "<h3>Suggestions:</h3>" +

        (suggestions.length
        ? suggestions.map(s => "<p>• " + s + "</p>").join("")
        : "<p>No basic improvements detected.</p>");


    // MOVE TO SECOND PAGE

    document.getElementById("entryPage").style.display =
        "none";

    document.getElementById("resultPage").style.display =
        "block";

}


// BACK TO FIRST PAGE

function goBack() {

    document.getElementById("resultPage").style.display =
        "none";

    document.getElementById("entryPage").style.display =
        "block";

    document.getElementById("password").value = "";

}
