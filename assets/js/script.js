
const randomBtn = document.querySelector(`#randomizeBtn`);
const battleBtn = document.querySelector(`#battleBtn`);
const pastBtn = document.querySelector(`#pastBtn`);
const nameValue = document.querySelector(`#searchName`);
const breedValue = document.querySelector(`#searchBreed`);

fetch('https://dogapi.dog/api/v2/breeds')
  .then(response => response.json())
  .then(data => {
    data.data.forEach(breed => {
      console.log(breed)
        const name = breed.attributes.name;
      const weightmax = breed.attributes.male_weight.max;
     const weightmin = breed.attributes.male_weight.min;
      const lifespanmax = breed.attributes.life.max;
      const lifespanmin = breed.attributes.life.min;
      

    
     console.log(`Name: ${name}, Weight: ${weightmax}, Lifespan: ${lifespanmax}`);
    });
  })

 //.catch(error => console.error('Error fetching data:', error));


    function rollDice() {
        // Generate a random number between 1 and 6
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        
        // Display the result in the console
        console.log("You rolled a " + diceRoll);
    }
    
    // Call the function to roll the dice
    rollDice();

    function fetchRandomDogImage() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())  // Convert the response to JSON
            .then(data => {
                if (data.status === 'success') {
                    console.log("Random Dog Image URL:", data.message);  // Output the image URL
                } else {
                    console.error("Failed to fetch a random dog image");
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }
    
    // Call the function to fetch and log a random dog image
    fetchRandomDogImage();

//For popup at end of battle.
function createCard() {
    const popup = $('<div>')
        .addClass('card task-card my-3')
        .attr('data-task-id', breed);
    const cardHeader = $('<div>').addClass('card-header h4').text(breed.value);
    const cardBody = $('<div>').addClass('card-body');


    const dogLife = $('<p>').addClass('card-text').text(/* NEED TO CREATE CONST FOR DOGS LIFE POINTS VALUE */  life.value);
    const dogHypo = $('<p>').addClass('card-text').text(/* CREATE CONST FOR DOGS HYPO ALLERGIES VALUE */);
    const weight = $('<p>').addClass('card-text').text(/* CREATE CONST FOR WEIGHT VALUE */);

    const close = $('<button>')
        .addClass('btn btn-danger close')
        .text('Close')
        

        //This down needs to be tied into close card function neither of them finished.
    close.on('click', closeCard);
    return popup;


};

//To close popup at end of battle.
function closeCard(event) {
    event.preventDefault();

    if (close === true) {

    };

};

//Getting random dogs.
/*randomBtn.addEventListener(`click`, function (event) {
    event.preventDefault();

});*/
//randomBtn.addEventListener(`click`, function (event) {

 //   event.preventDefault();

//});
