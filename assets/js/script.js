
const randomBtn = document.querySelector(`#randomizeBtn`);
const battleBtn = document.querySelector(`#battleBtn`);
const pastBtn = document.querySelector(`#pastBtn`);
const nameValue = document.querySelector(`#searchName`);
const breedValue = document.querySelector(`#searchBreed`);

fetch("https://dogapi.dog/api/v2/breeds")
    .then(response => response.json())
    //.then (data => console.log(data))
    .then(data => console.log(data.data))
    .catch(error => console.error(error))

function rollDice() {
    // Generate a random number between 1 and 6
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    // Display the result in the console
    console.log("You rolled a " + diceRoll);
}

// Call the function to roll the dice
rollDice();


//Creating cards for left and right side of screen, user and cpu.
function createCard() {
//APPEND THE DAMN CARDS AND MAKE CHILDREN IN THE SECTION.
    const rightDog = document.getElementById(`#rightdog`)
        .addClass('right-card')
        .attr('name', breed);

    rightDog.children[0].textcontent(breed);



    const cardHeader = document.getElementB

    const cardBody = $('<div>').addClass('card-body');

    const dogLife = $('<p>').addClass('card-text').text(life.value /* NEED TO CREATE CONST FOR DOGS LIFE POINTS VALUE */);
    const dogHypo = $('<p>').addClass('card-text').text(hypo.value/* CREATE CONST FOR DOGS HYPO ALLERGIES VALUE */);
    const dogWeight = $('<p>').addClass('card-text').text(weight.value/* CREATE CONST FOR WEIGHT VALUE */);

    const close = $('<button>')
        .addClass('btn btn-danger close')
        .text('Close')


    //This down needs to be tied into close card function neither of them finished.
    close.on('click', closeCard);
    return popup;


};


//For popup at end of battle.
function popUpCard() {

};


//To close popup at end of battle.
function closeCard(event) {
    event.preventDefault();

    if (close === true) {
        return;
    };

};

//Getting random dogs.
/*randomBtn.addEventListener(`click`, function (event) {
    event.preventDefault();

});*/

