const randomBtn = document.querySelector(`#randomizeBtn`);
const battleBtn = document.querySelector(`#battleBtn`);
const pastBtn = document.querySelector(`#pastBtn`);
const nameValue = document.querySelector(`#searchName`);
const breedValue = document.querySelector(`#searchBreed`);

randomBtn.addEventListener(`click`, function (event) {
    event.preventDefault();

});


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