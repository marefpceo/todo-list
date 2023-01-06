const projects = [];
let projectCount = 0;

const createProject = (name) => {
  const project = {};
  project.name = name;
  projectCount += 1; 
  project.projectId = `2023${projectCount}`;
  project.tasks = ['Pick up dry cleaning'];

  return project;
}

// Adds created project to the projects array
const addProject = (pName) => {
  // const pName = prompt('Enter Name');
  const newProject = createProject(pName)
  projects.push(newProject);
  return projects;
};

// Adds created tasks to project task property
const addTask = (taskObj, taskItem) => {
  taskObj.tasks.push(taskItem);
};

export { projects, addProject, addTask };