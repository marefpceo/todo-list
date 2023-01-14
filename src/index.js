import { pageHeader, containerDiv, sectionArea, asideArea, section } from './pageLayout';
import { addProject, addTask, getSelectedProject } from './project';
import { modalFooter, modalContent, clearModal, getTaskInput } from './modals';
import { createProjectsMenu } from './sidebarContent';
import './style.css';
import { enableButtons } from './forms';

let currBtn = '';

addProject('Personal');
addProject('Work');
addProject('School');
pageHeader();
containerDiv();
asideArea();
sectionArea();

section.addEventListener('click', (e) => {
  if (e.target.id === 'projectAdd-Btn') {
    currBtn = e.target.id;
    modalContent(currBtn);
  };
  if (e.target.id === 'taskAdd-Btn') {
    currBtn = e.target.id;
    modalContent(currBtn);
  };
});

modalFooter.addEventListener('click', (e) => {
  if (e.target.id === 'cancelBtn') {
    clearModal();
    enableButtons();
  };
  if (e.target.id === 'submitBtn') {
    if (currBtn === 'projectAdd-Btn') {
      const pName = document.getElementById('projectName');
      addProject(pName.value);
      createProjectsMenu();
      pName.value = '';
      clearModal();
      enableButtons();
    };
    
    if (currBtn === 'taskAdd-Btn') {
      const taskObjIndex = getSelectedProject(getTaskInput().selectedProject);
      addTask(taskObjIndex, getTaskInput().title, getTaskInput().description,
      getTaskInput().dueDate, getTaskInput().priority, getTaskInput().notes);
      createProjectsMenu();
      clearModal();
      enableButtons();
    };
  };
});
