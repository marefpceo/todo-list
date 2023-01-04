import format from 'date-fns/format';

const createTask = (title, description, dueDate) => {
  const createDate = format(Date.now(), 'MM/dd/yyyy');
  const priority = 'Low';
  const completed = false;
  
  return {title, description, dueDate, createDate, priority, completed};
 }

export default createTask;