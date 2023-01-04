const createTask = (title, description, dueDate) => {
  const createDate = Date.now();
  const priority = 'Low';
  const completed = false;
  
  return {title, description, dueDate, createDate, priority, completed};
 }

export default createTask;