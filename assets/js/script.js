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
  const cardHeader = $('<div>').addClass('card-header h4').text(task.name);
  const cardBody = $('<div>').addClass('card-body');
  const cardDescription = $('<p>').addClass('card-text').text(task.type);
  const cardDueDate = $('<p>').addClass('card-text').text(task.dueDate);
  const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete')
    .attr('data-task-id', task.id);
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