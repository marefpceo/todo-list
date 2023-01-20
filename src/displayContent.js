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
    const displayTitle = document.createElement('h3');
    const infoDiv = document.createElement('div');
    const displayDueDate = document.createElement('p');
    const displayPriority = document.createElement('p');
    const contentDiv = document.createElement('div');
    const displayDescription = document.createElement('p');
    const displayNotes = document.createElement('p');
    const task = projects[currProject].tasks[i];

    taskDiv.className = 'taskDiv';
    contentDiv.className = 'contentDiv';

    displayTitle.innerText = task.title;
    displayDueDate.innerText = task.dueDate;
    displayPriority.innerText = task.priority;
    displayDescription.innerText = task.description;
    displayNotes.innerText = task.notes;

    contentDiv.appendChild(displayDescription);
    contentDiv.appendChild(displayNotes);

    infoDiv.appendChild(displayDueDate);
    infoDiv.appendChild(displayPriority);

    taskDiv.appendChild(displayTitle);
    taskDiv.appendChild(contentDiv);
    taskDiv.appendChild(infoDiv);
    sectionBody.appendChild(taskDiv);
    section.appendChild(sectionBody);
    console.log(task);
  }
};

export default displayProject;