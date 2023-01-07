import { projectForm, submitButton, cancelButton } from './forms';
import { section } from './pageLayout';

const modalDiv = document.createElement('div');
const modalHeader = document.createElement('div');
const modalBody = document.createElement('div');
const modalFooter = document.createElement('div');
const h3 = document.createElement('h3');

const baseModal = () => {
  modalDiv.className = 'modalDiv';  
  modalHeader.className = 'modalHeader';
  modalBody.className = 'modalBody'; 
  modalFooter.className = 'modalFooter';

  modalDiv.appendChild(modalHeader);
  modalDiv.appendChild(modalBody);
  modalDiv.appendChild(modalFooter);

  section.appendChild(modalDiv);

};

const projectModal = () => {
  h3.innerText = 'Add Project';
  modalHeader.appendChild(h3);
  modalDiv.appendChild(modalHeader);
  modalBody.innerHTML = projectForm;
  modalFooter.innerHTML = submitButton;
  modalFooter.innerHTML += cancelButton;
};

const taskModal = () => {

};

export { projectModal, baseModal, taskModal, modalDiv, modalFooter };