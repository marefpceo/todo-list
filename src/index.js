import { pageHeader, containerDiv, sectionArea, asideArea, section } from './pageLayout';
import { addProject } from './project';
import { modalDiv, modalFooter, modalContent } from './modals';
// import { projectForm } from './forms';
import './style.css';

addProject('Personal');
pageHeader();
containerDiv();
asideArea();
sectionArea();


section.addEventListener('click', (e) => {
  let targetId = '';
  if (e.target.id === 'projectAdd-Btn') {
    targetId = e.target.id;
    modalContent(targetId);
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
});
