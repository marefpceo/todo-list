import format from 'date-fns/format';
import checkListIcon from './assets/images/checklist.svg';
import displayProject from './displayContent';
import { projectAddButton, taskAddButton } from './forms';
import { createViewMenu, createProjectsMenu, createContacts } from './sidebarContent';

const content = document.getElementById('content');
const container = document.createElement('div');
const section = document.createElement('section');
const titleDiv = document.createElement('div');

const pageHeader = () => {
  const header = document.createElement('header');
  const logoDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  const logo = document.createElement('img');
  const p = document.createElement('p');
  const date = format(Date.now(), 'EEEE, LLLL, do, yyyy');

  logo.src = checkListIcon;
  logoDiv.className = 'logo';
  h1.innerText = 'Todo';
  
  p.innerHTML = date;

  logoDiv.append(logo, h1);
  header.append(logoDiv, p);

  content.appendChild(header);
};

const containerDiv = () => {
  container.className = 'container';
  content.appendChild(container);
};

const asideArea = () => {
  const sidebarDivs = ['viewDiv', 'projectsDiv', 'contactDiv'];
  const sidebar = document.createElement('aside');

  for (let i = 0; i < sidebarDivs.length; i += 1){
    const idName = sidebarDivs[i];
    sidebarDivs[i] = document.createElement('div');
    sidebarDivs[i].id = idName;
    sidebar.appendChild(sidebarDivs[i]);
  }

  container.appendChild(sidebar);
  createViewMenu();
  createProjectsMenu();
  createContacts();
};

const sectionArea = () => {
  const sectionHead = document.createElement('div');
  const buttonDiv = document.createElement('div');
  const sectionBody = document.createElement('div');

  sectionHead.id = 'sectionHead';
  sectionBody.id = 'sectionBody';
  titleDiv.id = 'titleDiv';
  buttonDiv.id = 'buttonDiv';
  buttonDiv.innerHTML = projectAddButton;
  buttonDiv.innerHTML += taskAddButton;

  sectionHead.appendChild(titleDiv);
  sectionHead.appendChild(buttonDiv);
  section.appendChild(sectionHead);
  section.appendChild(sectionBody);
  container.appendChild(section);
};

//Action should be reduce or increase
const toggleTaskOpacity = (action) => {
  let h3color = document.querySelectorAll('.taskDiv h3');
  let taskDivBg = document.querySelectorAll('.taskDiv');
  let taskDivP = document.querySelectorAll('div.taskDiv');
  let toggleBtn = document.querySelectorAll('.taskDivHead');
  
  if (action === 'reduce') {
    for (let i = 0; i < h3color.length; i += 1) {
      h3color[i].style.color = 'var(--dark-50)';
      taskDivBg[i].style.backgroundColor = '#ffffff32';
      taskDivP[i].style.color = 'var(--dark-50)';
      toggleBtn[i].style.backgroundColor = '#ffffff32';
      toggleBtn[i].style.color = 'var(--dark-50)';
    }
  }
  if (action === 'increase') {
    for (let i = 0; i < h3color.length; i += 1) {
      h3color[i].style.color = 'var(--primary-text)';
      taskDivBg[i].style.backgroundColor = '#ffffff';
      taskDivP[i].style.color = 'var(--primary-text)';
      toggleBtn[i].style.backgroundColor = '#ffffff';
      toggleBtn[i].style.color = 'var(--primary-text)';
    }
  }
};

const initialPageLoad = () => {
  pageHeader();
  containerDiv();
  asideArea();
  sectionArea();
};

export { initialPageLoad, toggleTaskOpacity, section, titleDiv };
