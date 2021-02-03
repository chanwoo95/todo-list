// 추가하기 버튼을 눌렀을 때 입력창 초기화 및 리스트에 추가
const items = document.querySelector('.items');
const todoInput = document.querySelector('.todo__input');
const addBtn = document.querySelector('.todo__add');

function onAdd() {
    // 아이템의 정보를 받아옴
    const text = todoInput.value;
    console.log(text);

    // 받아온 아이템을 리스트에 추가시킴
    const item = createItem();
    // const item = createItem();

    // 입력창 초기화 및 포커스
    todoInput.focus();
    text.value = '';
}

addBtn.addEventListener('click', onAdd);

function createItem() {
    const li = document.createElement('li');
    li.setAttribute('className', 'item__row');
}

// 삭제버튼을 눌렀을 때 리스트 삭제
