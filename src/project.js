const projects = [];
let projectCount = 0;

const createProject = (name) => {
  const project = {};
  project.name = name;
  projectCount += 1; 
  project.projectId = `2023${projectCount}`;
  project.tasks = [];

  return project;
}

// Adds created project to the projects array
const addProject = (projectName) => {
  projects.push(createProject(projectName));
};

// Adds created tasks to project task property
const addTask = (taskObj, taskItem) => {
  taskObj.tasks.push(taskItem);
};

export { projects, addProject, addTask };