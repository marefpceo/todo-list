const projects = [];
let projectCount = 0;

const createProject = (name) => {
  projectCount += 1; 
  const projectId = `2023${projectCount}`;

  // const addTask = (title) => {};

  return {name, projectId};
}

const addProject = (name) => {
  projects.push(createProject(name));
}

export { addProject, projects };