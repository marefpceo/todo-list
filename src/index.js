import { pageHeader, asideArea, sectionArea } from './pageLayout';
import createTask from './task';
import { addProject, projects, addTask } from './project';
import './style.css';

pageHeader();
asideArea();
sectionArea();

/* *****Content below is for testing purposes only. ***** */
/* *****Delete when complete. ***** */

addProject('Personal');
addProject('Work');

const testItem = createTask('Test', 'Testing object creation', '1/30/23');
const testItem2 = createTask('Test2', '2nd time', '1/30/23');
const testItem3 = createTask('Test3', 'Last', '1/30/23');

addTask(projects[0], testItem);
addTask(projects[0], testItem2);
addTask(projects[1], testItem3);

const project = projects[0];

// const title = prompt('Enter a Title: ');
// const description = prompt('Enter a description: ');
// const dueDate = prompt('Enter a due date: ');

// array.push(createItem(title, description, dueDate));
console.log(projects);
console.log(project);
// console.log(personal);