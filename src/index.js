import createItem from './todoItem';

const testItem = createItem('Test', 'Testing object creation', '1/30/23');
const testItem2 = createItem('Test2', '2nd time', '1/30/23');
const testItem3 = createItem('Test3', 'Last', '1/30/23');
const array = [];

array.push(testItem);
array.push(testItem2);
array.push(testItem3);

// const title = prompt('Enter a Title: ');
// const description = prompt('Enter a description: ');
// const dueDate = prompt('Enter a due date: ');

// array.push(createItem(title, description, dueDate));
console.log(array);