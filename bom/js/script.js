const input = document.querySelector('#favchap');
const button = document.querySelector('#btn');
const list = document.querySelector('.list');

button.addEventListener('click',function(){
    if (input.value != ''){
        let li = document.createElement('li');
        let deleteBtn = document.createElement('button');
        li.textContent = input.value;
        deleteBtn.textContent = '❌';
        deleteBtn.setAttribute('class', 'delete-btn');
        li.appendChild(deleteBtn);
        list.appendChild(li);
        deleteBtn.addEventListener('click',function(){
            deleteBtn.parentElement.parentElement.removeChild(deleteBtn.parentElement)
        });
        input.value = ""
        saveList()

    }
})

function eventListener(){
    document.querySelectorAll('.delete-btn').forEach(function(btn){
        btn.addEventListener('click',function(){
            btn.parentElement.parentElement.removeChild(btn.parentElement);
            saveList()
        });
    })
}

function saveList(){
    localStorage.setItem('books',list.innerHTML);
}

function getList(){
        document.querySelector('.list').innerHTML = localStorage.getItem('books')
        eventListener();
    
}


