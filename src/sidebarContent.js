import githubIcon from './assets/images/github-mark.svg';
import linkedinIcon from './assets/images/linkedin.png';
import twitterIcon from './assets/images/twitter-blue.svg';
import calMonth from './assets/images/calendar_month.svg';
import calDay from './assets/images/calendar_today.svg';
import calWeek from './assets/images/calendar_week.svg';
import { projects } from './project';

const viewOptions = [{view: 'Today', icon: calDay},
                    {view: 'Week', icon: calWeek},
                    {view: 'All', icon: calMonth}];

const projectsUl = document.createElement('ul');

const createViewMenu = () => {
  const viewDiv = document.getElementById('viewDiv');
  const viewUl = document.createElement('ul');
  for (let i = 0; i < viewOptions.length; i += 1){
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('p');

    p.innerHTML = viewOptions[i].view;
    img.src = viewOptions[i].icon;
    li.append(img, p);
    viewUl.appendChild(li);
  }
  viewDiv.appendChild(viewUl);
};

const createProjectsMenu = () => {
  const projectsDiv = document.getElementById('projectsDiv');
  const h2 = document.createElement('h2');
  
  projectsDiv.innerHTML = ''; 
  projectsUl.innerHTML = '';

  let i;
  for (i = 0; i < projects.length; i += 1) {
    // const taskUl = document.createElement('ul');
    const li = document.createElement('li');
    projectsUl.className = 'projects';
    li.id = projects[i].projectId;
    li.innerHTML = projects[i].name;
    projectsUl.appendChild(li);
    // for (let j = 0; j < projects[i].tasks.length; j += 1){
    //   const taskLi = document.createElement('li');
    //   taskLi.innerHTML = projects[i].tasks[j].title;
    //   taskUl.appendChild(taskLi);
    // }
    // li.appendChild(taskUl);
    // taskUl.style.display = 'none';
  }
  h2.innerHTML = 'Projects';
  projectsDiv.appendChild(h2);
  projectsDiv.appendChild(projectsUl);
};

const createContacts = () => {
  const logos = [githubIcon, linkedinIcon, twitterIcon];
  const contactDiv = document.getElementById('contactDiv');
  const logosDiv = document.createElement('div');
  const deleteBtn = document.createElement('button');

  logosDiv.id = 'logosDiv';
  deleteBtn.id = 'deleteBtn';
  deleteBtn.textContent = 'Delete Stored Data';

  for (let i = 0; i < logos.length; i += 1) {
    const img = document.createElement('img');
    img.src = logos[i];
    logosDiv.appendChild(img);
  }
  contactDiv.appendChild(logosDiv);
  contactDiv.appendChild(deleteBtn);
};

export { createViewMenu, createProjectsMenu, createContacts, projectsUl };