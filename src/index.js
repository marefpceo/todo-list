import { pageHeader, containerDiv, sectionArea, asideArea } from './pageLayout';
import { addProject } from './project';
import './style.css';

addProject('Personal');
pageHeader();
containerDiv();
asideArea();
sectionArea();