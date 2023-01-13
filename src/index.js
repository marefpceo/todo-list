import { pageHeader, containerDiv, sectionArea, asideArea, section } from './pageLayout';
import { addProject } from './project';
import { modalDiv, modalFooter, modalContent } from './modals';
import { createProjectsMenu } from './sidebarContent';
import './style.css';

addProject('Personal');
pageHeader();
containerDiv();
asideArea();
sectionArea();

section.addEventListener('click', (e) => {
  if (e.target.id === 'projectAdd-Btn') {
    modalContent(e.target.id);
  };
  if (e.target.id === 'taskAdd-Btn') {
    modalContent(e.target.id);
  };
});

modalFooter.addEventListener('click', (e) => {
  if (e.target.id === 'cancelBtn') {
    modalDiv.style.display = 'none';
    document.getElementById('projectAdd-Btn').disabled = false;
    document.getElementById('taskAdd-Btn').disabled = false;
  };
  if (e.target.id === 'submitBtn') {
    const pName = document.getElementById('projectName');
    addProject(pName.value);
    document.getElementById('projectsDiv').innerHTML = '';
    createProjectsMenu();
    pName.value = '';
    modalDiv.style.display = 'none';
    document.getElementById('projectAdd-Btn').disabled = false;
    document.getElementById('taskAdd-Btn').disabled = false;
  };
});
