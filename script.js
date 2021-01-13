let body = document.getElementsByTagName('body'),
html = document.getElementsByTagName('html');

// Elements
let todoInput = document.querySelector('.todo-input'),
todoSubmit = document.querySelector('.todo-submit'),
todoList = document.querySelector('.todo-list');

// Module
const todoModule = {
    addItem : () => {
        todoSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            if(todoInput.value){
                let todoWrapper = document.createElement('span'),
                todoText = document.createElement('span'),
                todoCheck = document.createElement('button'),
                todoRemove = document.createElement('button');
        
                todoWrapper.classList.add('todo-wrapper');
                todoText.classList.add('todo-text');
                todoCheck.classList.add('todo-check');
                todoRemove.classList.add('todo-remove');
                todoCheck.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-check fa-w-16 fa-2x"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" class=""></path></svg>';
                todoRemove.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-trash-alt fa-w-14 fa-2x"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" class=""></path></svg>';
        
                todoText.innerText = todoInput.value;
                todoWrapper.appendChild(todoText);
                todoWrapper.appendChild(todoCheck);
                todoWrapper.appendChild(todoRemove);
                todoList.appendChild(todoWrapper);
                todoInput.value = '';
                todoInput.focus();
            }
        });
    },
    removeItem : () => {
        document.addEventListener('click', (e) => {
            let targetClick = e.target;
            if(targetClick && targetClick.classList.contains('todo-remove')){
                let parent = targetClick.parentElement;
                parent.classList.toggle('todo-removing');
                parent.addEventListener('transitionend', () => {
                    parent.remove();
                });
            }
        });
    },
    checkItem : () => {
        document.addEventListener('click', (e) =>{
            let targetClick = e.target;
            if(targetClick && targetClick.classList.contains('todo-check')){
                let parent = targetClick.parentElement;
                parent.classList.toggle('todo-checked');
            }
        });
    }
}

// Functions
todoModule.addItem();
todoModule.removeItem();
todoModule.checkItem();