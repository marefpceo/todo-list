const todoItem = (title, description, dueDate) => {
  const createDate = Date.now();
  const priority = 'Low';
    
  return {title, description, dueDate, createDate, priority};
 };

export default todoItem;