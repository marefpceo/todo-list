import format from 'date-fns/format';
import dateInput from 'date-fns/parseISO';
import { populateStorage } from './storeTodo';

const projects = [];

const getProjectCount = () => {
  let projectCount = projects.length;
  projectCount += 1;
  return projectCount;
};

// Creates a new project
const createProject = (name) => {
  const project = {};
  project.name = name;
  project.projectId = `2023${getProjectCount()}`;
  project.tasks = [];
  return project;
};

// Adds created project to the projects array and to localStorage
const addProject = (pName) => {
  const newProject = createProject(pName)
  projects.push(newProject);
  populateStorage(projects);
  return projects;
};

// Creates individual tasks that can be assigned to available projects
const createTask = (title, description, dueDate, priority, notes, taskProject) => {
  const task = {};
  const inputDate = dateInput(dueDate);
  
  task.title = title;
  task.description = description;
  task.dueDate = format(inputDate, 'MM/dd/yyyy');
  task.priority = priority;
  task.notes = notes;
  task.createDate = format(Date.now(), 'MM/dd/yyyy');
  task.projectId = taskProject;
  
  return task;
 };

 // Adds created tasks to project task property and to localStorage
const addTask = (taskObj, title, description, dueDate, priority, notes, taskProject) => {
  const newTask = createTask(title, description, dueDate, priority, notes, taskProject);
  projects[taskObj].tasks.push(newTask);
  populateStorage(projects);
};

// Edit tasks already created
const updateTask = (taskObj, taskIndex, title, description, dueDate, priority, notes, taskProject) => {
  projects[taskObj].tasks[taskIndex].title = title;
  projects[taskObj].tasks[taskIndex].description = description;
  projects[taskObj].tasks[taskIndex].dueDate = dueDate;
  projects[taskObj].tasks[taskIndex].priority = priority;
  projects[taskObj].tasks[taskIndex].notes = notes;
  projects[taskObj].tasks[taskIndex].projectId = taskProject;
};

// Used project id to return the index of matching project
const getSelectedProject = (projectId) => {
  const selection = projects.findIndex(item => item.projectId === projectId);
  return selection;
};

export { projects, addProject, addTask, createTask, getSelectedProject, updateTask };
