import { titleDiv } from './pageLayout';
import { getSelectedProject, projects, updateTask } from './project';
import { section } from './pageLayout';
import { format } from 'date-fns/esm';
import { addDays } from 'date-fns';
import { populateStorage } from './storeTodo';
import { getTaskInput, modalContent, clearModal, modalFooter } from './modals';
import { enableButtons } from './forms';

// Creates the html for the task objects and displays inputed tasks to section area
const displayTasks = (taskType) => {
  const currProject = taskType;
  const sectionBody = document.getElementById('sectionBody');

  sectionBody.innerHTML = '';
  
  for (let i = 0; i < currProject.length; i += 1){
    const taskDiv = document.createElement('div');
    const taskDivHead = document.createElement('div');
    const taskDivBtn = document.createElement('button');
    const displayTitle = document.createElement('h3');
    const checkComplete = document.createElement('input');
    const infoDiv = document.createElement('div');
    const displayDueDate = document.createElement('p');
    const displayPriority = document.createElement('p');
    const contentDiv = document.createElement('div');
    const displayDescription = document.createElement('p');
    const displayNotes = document.createElement('p');
    const taskFooter = document.createElement('div');
    const editBtn = document.createElement('button');
    const task = currProject[i];

    taskDiv.className = 'taskDiv';
    checkComplete.setAttribute('type', 'checkbox');
    checkComplete.name = i + 1;
    checkComplete.className = task.projectId;
    taskDivHead.className = 'taskDivHead';
    taskDivBtn.type = 'button';
    taskDivBtn.className = 'taskDivBtn';
    contentDiv.className = 'contentDiv';    
    taskFooter.className = 'taskFooter';
    editBtn.type = 'button';
    editBtn.id = 'edit';
    editBtn.innerHTML = 'Edit';
    

    displayTitle.innerHTML = task.title;
    displayDueDate.innerHTML = `<b>Due:</b> ${task.dueDate}`;
    displayPriority.innerHTML = `<b>Pri:</b> ${task.priority}`;
    displayDescription.innerHTML = `<b>Description:</b> <br>${task.description}`;
    displayNotes.innerHTML = `<b>Notes:</b> <br>${task.notes}`;

    taskFooter.appendChild(editBtn);

    contentDiv.appendChild(displayDescription);
    contentDiv.appendChild(displayNotes);
    contentDiv.appendChild(taskFooter);    

    infoDiv.appendChild(displayDueDate);
    infoDiv.appendChild(displayPriority);

    taskDiv.appendChild(checkComplete);
    taskDivHead.appendChild(displayTitle);
    taskDivHead.appendChild(infoDiv);
    taskDivBtn.appendChild(taskDivHead);
    taskDiv.appendChild(taskDivBtn);
    taskDiv.appendChild(contentDiv);
    sectionBody.appendChild(taskDiv);
    section.appendChild(sectionBody);
  }
  toggleTaskDiv();
  toggleDisplayView();
  deleteTask();
  editTask();
};

// Displays all tasks within the selected project
const displayProject = (projectId) => {
  const selectedProject = getSelectedProject(projectId);
  titleDiv.innerHTML = projects[selectedProject].name;
  projects[selectedProject].tasks;
  displayTasks(projects[selectedProject].tasks);
};

// Toggles display view between all tasks, tasks within the next week, and current day
const toggleDisplayView = () => {
  const allTasks = [];
  const all = document.querySelectorAll('#viewDiv li');
  const date = format(Date.now(), 'MM/dd/yyyy');
  const endWeek = addDays(new Date(date), 7);

  for (let i = 0; i < projects.length; i += 1) {
    for (let j = 0; j < projects[i].tasks.length; j += 1) {
      allTasks.push(projects[i].tasks[j]);
    }
  }

  // Sorts all tasks in order by date
  let sorted = allTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  // Filters all tasks due within the next week
  let weekly = sorted.filter(item => new Date(item.dueDate) <= endWeek && 
    new Date(item.dueDate) >= new Date(date));
  // Filters all tasks due on current date
  let today = sorted.filter(item => item.dueDate == date);
  
  all.forEach(view => {
    view.addEventListener('click', () =>{
      if (view.id === 'All') {
        titleDiv.innerHTML = 'All Tasks';
        displayTasks(sorted);
      }
      if (view.id === 'Week'){
        titleDiv.innerHTML = 'Week';
        displayTasks(weekly);
      }
      if (view.id === 'Today') {
        titleDiv.innerHTML = 'Today';
        displayTasks(today);
      }
    });
  });
};

// Toggles between task header view and full details
const toggleTaskDiv = () => {
  const taskBtn = document.querySelectorAll('.taskDivBtn');

  taskBtn.forEach(btn => {
    btn.addEventListener('click', () =>{

      if (btn.nextElementSibling.style.display === '' || btn.nextElementSibling.style.display === 'none') {
        btn.nextElementSibling.style.display = 'block';
      } else {
        btn.nextElementSibling.style.display = 'none';
      }
    });
  });
};

const deleteTask = () => {
  const checkbox = document.querySelectorAll('input[type=checkbox]');

  checkbox.forEach(box => {   
    box.addEventListener('change', () => {
      const taskIndex = box.name;

      if (box.checked === true) {
        const taskProject = getSelectedProject(box.className); 
        projects[taskProject].tasks.splice(taskIndex - 1, 1);   
        box.parentElement.remove();
        localStorage.clear();
        populateStorage(projects); 
      }
    });
  });  
};

const editTask = () => {
  const editTaskBtn = document.querySelectorAll('#edit');
  let taskProject, taskEdit, taskIndex;

  editTaskBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTaskDiv = btn.closest('div.taskDiv').firstElementChild;
      taskIndex = currentTaskDiv.name - 1;
      taskProject = getSelectedProject(currentTaskDiv.className);
      taskEdit = projects[taskProject].tasks[taskIndex];
      const dueDate = new Date(taskEdit.dueDate);
      modalContent('taskAdd-Btn');
      document.querySelector('.modalHeader > h3').innerHTML = 'Edit Task';
      
      document.getElementById('task-title').value = taskEdit.title;
      document.getElementById('task-description').value = taskEdit.description;
      document.getElementById('due-date').defaultValue = format(dueDate, 'yyyy-MM-dd');
      document.getElementById('priority').value = taskEdit.priority;
      document.getElementById('project-select').value = projects[taskProject].projectId;
      document.getElementById('notes').value = taskEdit.notes;
    });
  });

  modalFooter.addEventListener('click', (e) => {
    if (e.target.id === 'submitBtn') {
    updateTask(taskProject, taskIndex, getTaskInput().title, getTaskInput().description,
    getTaskInput().dueDate, getTaskInput().priority, getTaskInput().notes, getTaskInput().selectedProject);
    clearModal();
    enableButtons();
    localStorage.clear();
    populateStorage(projects);
    displayProject(getTaskInput().selectedProject);
    }
  });
};

export { displayTasks, displayProject };
