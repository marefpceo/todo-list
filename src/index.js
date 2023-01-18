import { initialPageLoad, section } from './pageLayout';
import { addProject, addTask, getSelectedProject, projects } from './project';
import { modalFooter, modalContent, clearModal, getTaskInput } from './modals';
import { createProjectsMenu, projectsUl } from './sidebarContent';
import './style.css';
import { enableButtons } from './forms';
import displayProject from './displayContent';
import { clearStorage, storageCheck } from './storeTodo';


let currBtn = '';

storageCheck(projects);
initialPageLoad();

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
  if (!e.target.id) {
    return;
  }else {
    const selection = e.target.id;
    displayProject(selection);
    console.log(selection);
  }
});

document.getElementById('deleteBtn').addEventListener('click', (e) => {
  console.log(e);
  clearStorage();
});