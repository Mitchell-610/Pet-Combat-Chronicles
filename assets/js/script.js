const randomBtn = document.querySelector(`#randomizeBtn`);
const battleBtn = document.querySelector(`#battleBtn`);
const pastBtn = document.querySelector(`#pastBtn`);
const nameValue = document.querySelector(`#searchName`);
const breedValue = document.querySelector(`#searchBreed`);

//For popup at end of battle.
function createCard() {
    const popup = $('<div>')
        .addClass('card task-card my-3')
        .attr('data-task-id', breed);
    const cardHeader = $('<div>').addClass('card-header h4').text(breed.value);
    const cardBody = $('<div>').addClass('card-body');


    const cardLife = $('<p>').addClass('card-text').text(/* NEED TO CREATE CONST FOR DOGS LIFE POINTS VALUE */);
    const cardHypo = $('<p>').addClass('card-text').text(/* CREATE CONST FOR DOGS HYPO ALLERGIES VALUE */);
    const weight = $('<p>').addClass('card-text').text(/* CREATE CONST FOR WEIGHT VALUE */);

    const close = $('<button>')
        .addClass('btn btn-danger close')
        .text('Close')
        

        //This down needs to be tied into close card function neither of them finished.
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

};

//To close popup at end of battle.
function closeCard(event) {
    event.preventDefault();

    if (close === true)

};

//Getting random dogs.
randomBtn.addEventListener(`click`, function (event) {
    event.preventDefault();

});





