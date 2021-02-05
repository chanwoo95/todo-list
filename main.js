const items = document.querySelector('.items');
const todoInput = document.querySelector('.todo__input');
const addBtn = document.querySelector('.item__add');
const delBtn = document.querySelector('.item__delete');

function onAdd() {
    const text = todoInput.value;

    if (text == '') {
        todoInput.focus();
        return;
    }

    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({ block: 'center' });

    todoInput.focus();
    todoInput.value = '';
}

addBtn.addEventListener('click', onAdd);

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const span = document.createElement('span');
    span.setAttribute('class', 'item__name');
    span.innerText = text;

    const delBtn = document.createElement('button');
    delBtn.setAttribute('class', 'item__delete');
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    delBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    });

    item.appendChild(span);
    item.appendChild(delBtn);

    itemRow.appendChild(item);

    return itemRow;
}

todoInput.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        onAdd();
    }
});
