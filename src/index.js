import { pageHeader, containerDiv, sectionArea, asideArea, section } from './pageLayout';
import { addProject, addTask, getSelectedProject, projects } from './project';
import { modalFooter, modalContent, clearModal, getTaskInput } from './modals';
import { createProjectsMenu, projectsUl } from './sidebarContent';
import './style.css';
import { enableButtons } from './forms';
import displayProject from './displayContent';
import { getFromStorage, storageAvailable } from './storeTodo';

let currBtn = '';

// window.onload = getFromStorage(); 
const itemSet = (localStorage.getItem('projects') !== null);
console.log(itemSet);

// storageAvailable('localStorage');

if (itemSet) {
  const restoreTemp = getFromStorage();
  for (let i = 0; i < restoreTemp.length; i += 1) {
    projects.push(restoreTemp[i]);
  }
  console.log(restoreTemp);
} else {
  addProject('Personal');
  addProject('Work');
  addProject('School');
}

pageHeader();
containerDiv();
asideArea();
sectionArea();

section.addEventListener('click', (e) => {
  if (e.target.id === 'projectAdd-Btn') {
    currBtn = e.target.id;
    modalContent(currBtn);
  }
  if (e.target.id === 'taskAdd-Btn') {
    currBtn = e.target.id;
    modalContent(currBtn);
  }
});

modalFooter.addEventListener('click', (e) => {
  if (e.target.id === 'cancelBtn') {
    clearModal();
    enableButtons();
  }
  if (e.target.id === 'submitBtn') {
    if (currBtn === 'projectAdd-Btn') {
      const pName = document.getElementById('projectName');
      addProject(pName.value);
      createProjectsMenu();
      pName.value = '';
      clearModal();
      enableButtons();
    }
    
    if (currBtn === 'taskAdd-Btn') {
      const taskObjIndex = getSelectedProject(getTaskInput().selectedProject);
      addTask(taskObjIndex, getTaskInput().title, getTaskInput().description,
      getTaskInput().dueDate, getTaskInput().priority, getTaskInput().notes);
      createProjectsMenu();
      clearModal();
      enableButtons();
    }
  }
});

projectsUl.addEventListener('click', (e) => {
  const selection = e.target.id;
  displayProject(selection);
  console.log(selection);
});
