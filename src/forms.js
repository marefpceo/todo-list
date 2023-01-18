import { projects } from './project';

const projectForm = `<div id='projectForm'>
                    <label for='name'>Name: </label>
                    <input type='text' name='name' id='projectName' placeholder='My Project'>
                  </div>`;

const projectOption = () => {
  const projectSelect = document.getElementById('project-select');
  for (let i = 0; i < projects.length; i += 1){
    const option = document.createElement('option');
    option.value = projects[i].projectId;
    option.textContent = projects[i].name;
    projectSelect.appendChild(option);
  }
};

const taskForm = `<div id='taskForm'>
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

const submitButton = `<button id='submitBtn'>Submit</button>`;

const cancelButton = `<button id='cancelBtn'>Cancel</button>`;

const projectAddButton = `<button id='projectAdd-Btn'>New Project</button>`;

const taskAddButton = `<button id='taskAdd-Btn'>New Task</button>`;

const enableButtons = () => {
  document.getElementById('projectAdd-Btn').disabled = false;
  document.getElementById('taskAdd-Btn').disabled = false;
};

export { projectForm, taskForm, submitButton, cancelButton, projectAddButton, taskAddButton, 
  projectOption, enableButtons };
  