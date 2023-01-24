import { titleDiv } from './pageLayout';
import { getSelectedProject, projects } from './project';
import { section } from './pageLayout';

const displayProject = (projectId) => {
  const currProject = getSelectedProject(projectId);
  const sectionBody = document.getElementById('sectionBody');

  sectionBody.innerHTML = '';
  titleDiv.innerHTML = projects[currProject].name;
  console.log(currProject);

  for (let i = 0; i < projects[currProject].tasks.length; i += 1){
    const taskDiv = document.createElement('div');
    const taskDivHead = document.createElement('button');
    const displayTitle = document.createElement('h3');
    const infoDiv = document.createElement('div');
    const displayDueDate = document.createElement('p');
    const displayPriority = document.createElement('p');
    const contentDiv = document.createElement('div');
    const displayDescription = document.createElement('p');
    const displayNotes = document.createElement('p');
    const task = projects[currProject].tasks[i];

    taskDiv.className = 'taskDiv';
    taskDivHead.type = 'button';
    taskDivHead.className = 'taskDivHead';
    contentDiv.className = 'contentDiv';

    displayTitle.innerText = task.title;
    displayDueDate.innerHTML = `<b>Due:</b> ${task.dueDate}`;
    displayPriority.innerHTML = `<b>Pri:</b> ${task.priority}`;
    displayDescription.innerHTML = `<b>Description:</b> <br>${task.description}`;
    displayNotes.innerHTML = `<b>Notes:</b> <br>${task.notes}`;

    contentDiv.appendChild(displayDescription);
    contentDiv.appendChild(displayNotes);

    infoDiv.appendChild(displayDueDate);
    infoDiv.appendChild(displayPriority);

    taskDivHead.appendChild(displayTitle);
    taskDivHead.appendChild(infoDiv);
    taskDiv.appendChild(taskDivHead);
    taskDiv.appendChild(contentDiv);
    sectionBody.appendChild(taskDiv);
    section.appendChild(sectionBody);
    console.log(task);
  }
  toggleTaskDiv();
};

const toggleTaskDiv = () => {
  const taskBtn = document.querySelectorAll('.taskDivHead');

  taskBtn.forEach(btn => {
    btn.addEventListener('click', (e) =>{
      let currentDiv = e.target;
      if (currentDiv.nextElementSibling.style.display === 'block') {
        currentDiv.nextElementSibling.style.display = 'none';
      } else {
        currentDiv.nextElementSibling.style.display = 'block';
      }
      console.log(currentDiv.nextElementSibling);
    })
  });

};

export { displayProject, toggleTaskDiv };