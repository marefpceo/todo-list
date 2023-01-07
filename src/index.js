import { pageHeader, containerDiv, sectionArea, asideArea, section } from './pageLayout';
import { addProject } from './project';
import { baseModal, projectModal, modalDiv, modalFooter } from './modals';
// import { projectForm } from './forms';
import './style.css';

addProject('Personal');
pageHeader();
containerDiv();
asideArea();
sectionArea();

section.addEventListener('click', (e) => {
  if (e.target.id === 'projectAdd-Btn') {
    modalDiv.style.display = 'block';
    projectModal();
    baseModal();
  };
});

modalFooter.addEventListener('click', (e) => {
  if (e.target.id === 'cancelBtn') {
    modalDiv.style.display = 'none';
  };
});
