import format from 'date-fns/format';
import checkListIcon from './assets/images/checklist.svg';
import { createViewMenu, createProjectsMenu, createContacts } from './sidebarContent';

const content = document.getElementById('content');
const container = document.createElement('div');

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

  logoDiv.appendChild(logo);
  logoDiv.appendChild(h1);
  
  header.appendChild(logoDiv);
  header.appendChild(p);

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
  const section = document.createElement('section');
  
  container.appendChild(section);
};

export { pageHeader, asideArea, sectionArea, containerDiv };
