

const randomBtn = document.querySelector(`#randomizeBtn`);
const battleBtn = document.querySelector(`#battleBtn`);
const pastBtn = document.querySelector(`#pastBtn`);
const nameValue = document.querySelector(`#searchName`);
const breedValue = document.querySelector(`#searchBreed`);

fetch("https://dogapi.dog/api/v2/breeds")
    .then(response => response.json())
    //.then (data => console.log(data))
    .then (data => console.log(data.data))
    .catch(error => console.error(error))  

    function rollDice() {
        // Generate a random number between 1 and 6
<<<<<<< HEAD
        const diceRoll = Math.floor(Math.random() * 6) + 1;
=======
        const diceRoll = Math.floor(Math.random() * 6) + 1;git
>>>>>>> 99e6069a5daa336903b577c777f381a02fe5e0ae
        
        // Display the result in the console
        console.log("You rolled a " + diceRoll);
    }
    
    // Call the function to roll the dice
    rollDice();


//For popup at end of battle.
function createCard() {
    const popup = $('<div>')
        .addClass('card task-card my-3')
        .attr('data-task-id', breed);
    const cardHeader = $('<div>').addClass('card-header h4').text(breed.value);
    const cardBody = $('<div>').addClass('card-body');


<<<<<<< HEAD
    const dogLife = $('<p>').addClass('card-text').text(/* NEED TO CREATE CONST FOR DOGS LIFE POINTS VALUE */  life.value);
    const dogHypo = $('<p>').addClass('card-text').text(/* CREATE CONST FOR DOGS HYPO ALLERGIES VALUE */);
=======
    const cardLife = $('<p>').addClass('card-text').text(/* NEED TO CREATE CONST FOR DOGS LIFE POINTS VALUE */);
    const cardHypo = $('<p>').addClass('card-text').text(/* CREATE CONST FOR DOGS HYPO ALLERGIES VALUE */);
>>>>>>> 99e6069a5daa336903b577c777f381a02fe5e0ae
    const weight = $('<p>').addClass('card-text').text(/* CREATE CONST FOR WEIGHT VALUE */);

    const close = $('<button>')
        .addClass('btn btn-danger close')
        .text('Close')
        

        //This down needs to be tied into close card function neither of them finished.
<<<<<<< HEAD
    close.on('click', closeCard);
    return popup;
=======
    cardDeleteBtn.on('click', handleDeleteTask);
    if (task.dueDate && task.status !== 'done') {
        const now = dayjs();
        const taskDueDate = dayjs(task.dueDate, 'DD/MM/YYYY');
        if (now.isSame(taskDueDate, 'day')) {
            taskCard.addClass('bg-warning text-white');
        } else if (now.isAfter(taskDueDate)) {
            taskCard.addClass('bg-danger text-white');
            cardDeleteBtn.addClass('border-light');
        }
    }


    cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
    taskCard.append(cardHeader, cardBody);
    return taskCard;
>>>>>>> 99e6069a5daa336903b577c777f381a02fe5e0ae

};

//To close popup at end of battle.
function closeCard(event) {
    event.preventDefault();

<<<<<<< HEAD
    if (close === true) {

    }
=======
    if (close === true){}
    
>>>>>>> 99e6069a5daa336903b577c777f381a02fe5e0ae

};

//Getting random dogs.
<<<<<<< HEAD
/*randomBtn.addEventListener(`click`, function (event) {
    event.preventDefault();

});*/
=======
randomBtn.addEventListener(`click`, function (event) {
    event.preventDefault();

});
>>>>>>> 99e6069a5daa336903b577c777f381a02fe5e0ae
