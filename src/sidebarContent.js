import githubIcon from './assets/images/github-mark.svg';
import linkedinIcon from './assets/images/linkedin.png';
import twitterIcon from './assets/images/twitter-blue.svg';
import { projects } from './project';

const viewOptions = ['Today','This Week','All'];

const createViewMenu = () => {
  const viewDiv = document.getElementById('viewDiv');
  const ul = document.createElement('ul');
  for (let i = 0; i < viewOptions.length; i += 1){
    const li = document.createElement('li');
    li.innerHTML = viewOptions[i];
    ul.appendChild(li);
  }
  viewDiv.appendChild(ul);
}

const createProjectsMenu = () => {
  const projectsDiv = document.getElementById('projectsDiv');
  const h2 = document.createElement('h2');
  const ul = document.createElement('ul');

  for (let i = 0; i < projects.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = projects[i].name;
    ul.appendChild(li);
  }

  h2.innerHTML = 'Projects';

  projectsDiv.appendChild(h2);
  projectsDiv.appendChild(ul);
}

const createContacts = () => {
  const logos = [githubIcon, linkedinIcon, twitterIcon];
  const contactDiv = document.getElementById('contactDiv');

  for (let i = 0; i < logos.length; i += 1) {
    const img = document.createElement('img');
    img.src = logos[i];
    contactDiv.appendChild(img);
  }
}

export { createViewMenu, createProjectsMenu, createContacts };