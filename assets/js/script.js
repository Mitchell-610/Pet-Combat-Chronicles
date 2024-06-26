
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
    data.data.forEach(breed);

    const breed = data.data.attribute.name;

    const dogLifeMax = data.data.attribute.life.max;
    const dogLifeMin = data.data.attribute.life.min;
const dogLife = dogLifeMax + dogLifeMin / 2;

    const dogHypo = data.data.attribute.hypoallergenic;

    const dogWeightMax = data.data.attribute.male_weight.max;
    const dogWeightMin = data.data.attribute.male_weight.min;
const dogWeight = dogWeightMax + dogWeightMin / 2;

    rightDog.children[0].textContent(breed);
    rightDog.children[1].textContent(dogLife);
    rightDog.children[2].textContent(dogHypo);
    rightDog.children[3].textContent(dogWeight);
    console.log(breed);
    console.log(dogLife);
    console.log(dogHypo);
    console.log(dogWeight);
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

