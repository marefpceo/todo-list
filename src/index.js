import { pageHeader, containerDiv, sectionArea, asideArea } from './pageLayout';
import { addProject } from './project';
import { baseModal, projectModal } from './modals';
import { projectForm } from './forms';
import './style.css';

addProject('Personal');
pageHeader();
containerDiv();
asideArea();
sectionArea();
projectModal();

baseModal();


console.log(projectForm);