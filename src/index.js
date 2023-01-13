import { pageHeader, containerDiv, sectionArea, asideArea, section } from './pageLayout';
import { addProject, createTask } from './project';
import { modalFooter, modalContent, clearModal } from './modals';
import { createProjectsMenu } from './sidebarContent';
import './style.css';
import { enableButtons } from './forms';

let currBtn = '';

addProject('Personal');
addProject('Test1');
addProject('Test2');
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
      // createTask();
      clearModal();
      enableButtons();
    };
  };
});
