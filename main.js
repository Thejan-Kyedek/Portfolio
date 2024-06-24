
function changeColor(newColor) {
    let variableName = document.querySelector("h1");
    variableName.style.color = newColor;
}

let firstButton = document.querySelector('#extra-access-contact');
let secondButton = document.querySelector('#extra-access-contact-second');
function hideButton() {
    firstButton.style.display = 'none';
    secondButton.style.display = 'block';
}
function hideSecondButton() {
    firstButton.style.display = 'block';
    secondButton.style.display = 'none';
}
firstButton.addEventListener('click', hideButton);
secondButton.addEventListener('click', hideSecondButton);

function revealForm(newAppearance) {
    let seeForm = document.querySelector(".mini-form");
    seeForm.style.display = newAppearance;
}

function vanishForm(newDisappearance) {
    let invisiForm = document.querySelector(".mini-form");
    invisiForm.style.display = newDisappearance;
}

