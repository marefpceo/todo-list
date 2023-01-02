import todoItem from './todoItem';

const testItem = todoItem('Test', 'Testing object creation', '1/30/23');
const testItem2 = todoItem('Test2', '2nd time', '1/30/23');
const testItem3 = todoItem('Test3', 'Last', '1/30/23');
const array = [];

array.push(testItem);
array.push(testItem2);
array.push(testItem3);

console.log(array);