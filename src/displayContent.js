import { titleDiv } from './pageLayout';
import { getSelectedProject, projects } from './project';


const displayProject = (projectId) => {
  const currProject = getSelectedProject(projectId);
  titleDiv.innerHTML = projects[currProject].name;
  console.log(currProject);
};

export default displayProject;