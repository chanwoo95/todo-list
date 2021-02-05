// 추가하기 버튼을 눌렀을 때 입력창 초기화 및 리스트에 추가
const items = document.querySelector('.items');
const todoInput = document.querySelector('.todo__input');
const addBtn = document.querySelector('.item__add');
const delBtn = document.querySelector('.item__delete');

function onAdd() {
    // 아이템의 정보를 받아옴
    const text = todoInput.value;
    console.log(text);

    // 받아온 아이템을 리스트에 추가시킴
    const item = createItem(text);
    items.appendChild(item);

    // 입력창 초기화 및 포커스
    todoInput.focus();
    text.value = '';
}

addBtn.addEventListener('click', onAdd);

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('className', 'item__row');

    const span = document.createElement('span');
    span.setAttribute('className', 'item__name');
    span.innerHTML = text;

    const delBtn = document.createElement('button');
    delBtn.setAttribute('className', 'item__delete');
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    itemRow.appendChild(span);
    itemRow.appendChild(delBtn);
    items.appendChild(itemRow);

    return itemRow;
}
