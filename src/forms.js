const projectForm = `<label for='name'>Name: </label>
<input type='text' name='name' id='projectName' placeholder='My Project'>`;

const taskForm = `<div>
                    <label for='title'>Title: </label>
                    <input type='text' name='title' id='task-title'>
                  </div>
                  <div>
                    <label for='description'>Description: </label>
                    <input type='text' name='descripton' id='task-desciption'>
                  </div>
                  <div>
                    <label for='due-date'>Due Date: </label>
                    <input type='date' name='due-date' id='due-date'>

                    <label for='priority'>Priority</label>
                    <select name='priority' id='priority'>
                        <option value='low'>Low</option>
                        <option value='medium'>Medium</option>
                        <option value='high'>High</option>
                    </select>
                  </div>
                  <div>
                    <label for='notes'>Notes: </label>
                    <textarea name='notes' id='notes' rows='5' cols='30'>
                    </textarea>
                  </div>`;

const submitButton = `<button id='submitBtn'>Submit</button>`;

const cancelButton = `<button id='cancelBtn'>Cancel</button>`;

const projectAddButton = `<button id='projectAdd-Btn'>New Project</button>`;

const taskAddButton = `<button id='taskAdd-Btn'>New Task</button>`;

export { projectForm, taskForm, submitButton, cancelButton, projectAddButton, taskAddButton };