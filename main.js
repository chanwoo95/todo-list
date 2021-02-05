const items = document.querySelector('.items');
const input = document.querySelector('.todo__input');
const addBtn = document.querySelector('.item__add');

function onAdd() {
    const text = input.value;

    if (text == '') {
        input.focus();
        return;
    }

    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({ block: 'center' });

    input.value = '';
    input.focus();
}

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text;

    const delBtn = document.createElement('button');
    delBtn.setAttribute('class', 'item__delete');
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    delBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    });

    item.appendChild(name);
    item.appendChild(delBtn);

    itemRow.appendChild(item);

    return itemRow;
}

addBtn.addEventListener('click', onAdd);

input.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        onAdd();
    }
});
