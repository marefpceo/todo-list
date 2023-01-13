import format from 'date-fns/format';

const projects = [];
let projectCount = 0;

const createProject = (name) => {
  const project = {};
  project.name = name;
  projectCount += 1; 
  project.projectId = `2023${projectCount}`;
  project.tasks = [];

  return project;
};

// Adds created project to the projects array
const addProject = (pName) => {
  const newProject = createProject(pName)
  projects.push(newProject);
  return projects;
};

// Adds created tasks to project task property
const addTask = (taskObj, taskItem) => {
  taskObj.tasks.push(taskItem);
};

const createTask = (title, description, dueDate) => {
  const createDate = format(Date.now(), 'MM/dd/yyyy');
  const priority = 'Low';
  const completed = false;
  
  return {title, description, dueDate, createDate, priority, completed};
 };

export { projects, addProject, addTask, createTask };