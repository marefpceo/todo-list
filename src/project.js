import format from 'date-fns/format';
import dateInput from 'date-fns/parseISO';

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

const createTask = (title, description, dueDate, priority, notes) => {
  const task = {};
  const inputDate = dateInput(dueDate);
  
  task.title = title;
  task.description = description;
  task.dueDate = format(inputDate, 'MM/dd/yyyy');
  task.priority = priority;
  task.notes = notes;
  task.createDate = format(Date.now(), 'MM/dd/yyyy');
  task.completed = false;
  
  return task;
 };

 // Adds created tasks to project task property
const addTask = (taskObj, title, description, dueDate, priority, notes) => {
  const newTask = createTask(title, description, dueDate, priority, notes);
  projects[taskObj].tasks.push(newTask);
  console.log(newTask);
};

const getSelectedProject = (projectId) => {
  const selection = projects.findIndex(item => item.projectId === projectId);
  return selection;
}

export { projects, addProject, addTask, createTask, getSelectedProject };