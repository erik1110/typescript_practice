const txt = document.querySelector('.txt') as HTMLInputElement;
const save = document.querySelector('.save') as HTMLButtonElement;
const list = document.querySelector('.list') as HTMLUListElement;

interface ToDoItem {
  content: string;
}

let data: ToDoItem[] = [];

function renderData(): void {
  let str = '';
  data.forEach(function (item, index) {
    str += `<li>${item.content} <input class="delete" type="button" data-num="${index}" value="刪除待辦"></li>`;
  });
  list.innerHTML = str;
}

// 新增待辦功能
save.addEventListener('click', function(e: MouseEvent) {
  if (txt.value == '') {
    alert('請輸入內容');
    return;
  }
  let obj: ToDoItem = { content: txt.value };
  data.push(obj);
  renderData();
});

// 刪除待辦功能
list.addEventListener('click', function(e: MouseEvent) {
  if (!(e.target instanceof HTMLElement) || e.target.getAttribute('class') !== 'delete') {
    return;
  }
  let num = parseInt(e.target.getAttribute('data-num')!);
  console.log(num);
  data.splice(num, 1);
  alert('刪除成功！');
  renderData();
});