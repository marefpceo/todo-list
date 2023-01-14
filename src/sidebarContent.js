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

const createViewMenu = () => {
  const viewDiv = document.getElementById('viewDiv');
  const ul = document.createElement('ul');
  for (let i = 0; i < viewOptions.length; i += 1){
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('p');

    p.innerHTML = viewOptions[i].view;
    img.src = viewOptions[i].icon;
    li.append(img, p);
    ul.appendChild(li);
  };
  viewDiv.appendChild(ul);
};

const createProjectsMenu = () => {
  const projectsDiv = document.getElementById('projectsDiv');
  const h2 = document.createElement('h2');
  const ul = document.createElement('ul');

  document.getElementById('projectsDiv').innerHTML = '';
  let i;
  for (i = 0; i < projects.length; i += 1) {
    const taskUl = document.createElement('ul');
    const li = document.createElement('li');
    ul.className = 'projects';
    li.id = projects[i].projectId;
    li.innerHTML = projects[i].name;
    ul.appendChild(li);
    for (let j = 0; j < projects[i].tasks.length; j += 1){
      const taskLi = document.createElement('li');
      taskLi.innerHTML = projects[i].tasks[j].title;
      taskUl.appendChild(taskLi);
    }
    li.appendChild(taskUl);
  };
  h2.innerHTML = 'Projects';
  projectsDiv.appendChild(h2);
  projectsDiv.appendChild(ul);
};

const createContacts = () => {
  const logos = [githubIcon, linkedinIcon, twitterIcon];
  const contactDiv = document.getElementById('contactDiv');

  for (let i = 0; i < logos.length; i += 1) {
    const img = document.createElement('img');
    img.src = logos[i];
    contactDiv.appendChild(img);
  };
};

export { createViewMenu, createProjectsMenu, createContacts };