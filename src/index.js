
document.addEventListener('DOMContentLoaded', () => {
  // your code here
  const taskForm = document.getElementById('create-task-form');
  const taskList = document.getElementById('task-list');

  taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting and page from refreshing

    const taskInput = document.getElementById('new-task-description');
    const taskDescription = taskInput.value.trim();

    if (taskDescription !== '') {
      // Create a new task item
      const taskItem = document.createElement('li');
      const taskText = document.createTextNode(taskDescription);
      taskItem.appendChild(taskText);

      // Add a delete button to the task item
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      taskItem.appendChild(deleteButton);

      // Append the task item to the task list
      taskList.appendChild(taskItem);

      // Clear the task input field
      taskInput.value = '';
    }
  });

  taskList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
      // Delete the parent task item when the delete button is clicked
      const taskItem = target.parentNode;
      taskList.removeChild(taskItem);
    }
  });
});

