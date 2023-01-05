import format from 'date-fns/format';
import checkListIcon from './assets/images/checklist.svg';

const content = document.getElementById('content');

const pageHeader = () => {
  const header = document.createElement('header');
  const logoDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  const logo = document.createElement('img');
  const p = document.createElement('p');
  const date = format(Date.now(), 'EEEE, LLLL, Lo, yyyy');

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

const asideArea = () => {
  const sidebarDivs = ['viewDiv', 'projectsDiv', 'contactDiv'];
  const sidebar = document.createElement('aside');

  for (let i = 0; i < sidebarDivs.length; i += 1){
    const idName = sidebarDivs[i];
    sidebarDivs[i] = document.createElement('div');
    sidebarDivs[i].id = idName;
    sidebar.appendChild(sidebarDivs[i]);
  }

  content.appendChild(sidebar);
};

const sectionArea = () => {
  const section = document.createElement('section');

  content.appendChild(section);
};

export { pageHeader, asideArea, sectionArea };
