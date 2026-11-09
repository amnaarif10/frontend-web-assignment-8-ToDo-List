
var input = document.getElementById('input');
var addBtn = document.querySelector('.addbtn');
var list = document.querySelector('.list');


addBtn.addEventListener('click', function() {
    
    
    if (input.value === '') {
        return;
    }

  
    let li = document.createElement('li');
    li.textContent = input.value;

   
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';


    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

   
    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = '';
});