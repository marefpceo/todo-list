import { projects } from './project';

export const projectForm = `<div id='projectForm'>
                    <label for='name'>Name: </label>
                    <input type='text' name='name' id='projectName' placeholder='My Project'>
                  </div>`;

export const projectOption = () => {
  const projectSelect = document.getElementById('project-select');
  for (let i = 0; i < projects.length; i += 1){
    const option = document.createElement('option');
    option.value = projects[i].projectId;
    option.textContent = projects[i].name;
    projectSelect.appendChild(option);
  }
};

export const taskForm = `<div id='taskForm'>
                  <div>
                    <label for='title'>Title: </label>
                    <input type='text' name='title' id='task-title' required>
                  </div>
                  <div>
                    <label for='description'>Description: </label>
                    <input type='text' name='description' id='task-description' required>
                  </div>
                  <div>
                    <div>  
                      <label for='due-date'>Due Date: </label>
                      <input type='date' name='due-date' id='due-date' required>
                    </div>
                    <div>  
                      <label for='priority'>Priority: </label>
                      <select name='priority' id='priority' required>
                        <option value='low'>Low</option>
                        <option value='medium'>Medium</option>
                        <option value='high'>High</option>
                      </select>
                    </div>
                    <div>  
                      <label for='project-select'>Project: </label>
                      <select name='project-select' id='project-select' required>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label for='notes'>Notes: </label>
                    <textarea name='notes' id='notes' rows='5' cols='20'></textarea>
                  </div>`;

export const submitButton = `<button id='submitBtn'>Submit</button>`;

export const cancelButton = `<button id='cancelBtn'>Cancel</button>`;

export const projectAddButton = `<button id='projectAdd-Btn'>New Project</button>`;

export const taskAddButton = `<button id='taskAdd-Btn'>New Task</button>`;

export const enableButtons = () => {
  document.getElementById('projectAdd-Btn').disabled = false;
  document.getElementById('taskAdd-Btn').disabled = false;
};
