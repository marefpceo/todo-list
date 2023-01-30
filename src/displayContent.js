import { titleDiv } from './pageLayout';
import { getSelectedProject, projects } from './project';
import { section } from './pageLayout';
import { format } from 'date-fns/esm';
import { addDays } from 'date-fns';
import { populateStorage, clearStorage } from './storeTodo';

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

export { displayTasks, displayProject };
