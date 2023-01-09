import { pageHeader, containerDiv, sectionArea, asideArea, section } from './pageLayout';
import { addProject } from './project';
import { baseModal, projectModal, taskModal, modalDiv, modalFooter } from './modals';
// import { projectForm } from './forms';
import './style.css';

addProject('Personal');
pageHeader();
containerDiv();
asideArea();
sectionArea();


section.addEventListener('click', (e) => {
  if (e.target.id === 'projectAdd-Btn') {
    projectModal();
    baseModal();
  };
  if (e.target.id === 'taskAdd-Btn') {
    taskModal();
    baseModal();
  };
});

modalFooter.addEventListener('click', (e) => {
  if (e.target.id === 'cancelBtn') {
    modalDiv.style.display = 'none';
    document.getElementById('projectAdd-Btn').disabled = false;
    document.getElementById('taskAdd-Btn').disabled = false;
  };
});
