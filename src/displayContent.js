import { titleDiv, section } from './pageLayout';
import { getSelectedProject, projects } from './project';


const displayProject = (projectId) => {
  const currProject = getSelectedProject(projectId);
  titleDiv.innerHTML = projects[currProject].name;
  console.log(currProject);

  for (let i = 0; i < projects[currProject].tasks.length; i += 1){
    const task = projects[currProject].tasks[i];
    console.log(task);
  }
};

export default displayProject;