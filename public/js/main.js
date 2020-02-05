var form = document.getElementsByTagName('form');
var ul = document.getElementById('list');
var inputTask = document.getElementById('input-task');
var error = document.getElementsByTagName('span');

var addTask = () => {
  if(inputTask.value != ""){
    var newLi = document.createElement('li');
    newLi.classList.add('newLi','todo','p-x','p-y');
    newLi.innerHTML = `<div class='row'><div class='col-sm-12'><div class='row'><div class='col-sm-9'><input type="text" class="display-none p-x" value="`+inputTask.value +`"><span class="p-x">`+ inputTask.value + `</span></div> <div class='col-sm-3'><button type='button' class='btn btn-danger'><i class='fas fa-trash'></i></button><button type='button' class='btn btn-warning'><i class='fas fa-pen'></i></button> <button type='button' class='btn btn-success'><i class='fas fa-check'></i></button></div></div></div></div>`;
    ul.prepend(newLi);
    inputTask.value = "";

    
    var btnCheck = newLi.querySelector('.fa-check').parentElement;
    btnCheck.addEventListener('click',() => taskChecked(event.currentTarget));
    
    var btnTrash = newLi.querySelector('.fa-trash').parentElement;
    btnTrash.addEventListener('click',() => taskTrashed(event.currentTarget));
    
    var btnEdit = newLi.querySelector('.fa-pen').parentElement;
    btnEdit.addEventListener('click',() => taskEdited(event.currentTarget));
    error[0].classList.add('display-none');
  }
  else{
    error[0].classList.remove('display-none');
  }
};
var taskEdited = (btn) => {
  var inputInTask = btn.parentElement.previousElementSibling.children[0];
  var spanInTask = btn.parentElement.previousElementSibling.children[1];
  if(inputInTask.value != ""){

    inputInTask.classList.toggle('display-none');
    spanInTask.classList.toggle('display-none');
    inputInTask.focus();
    
    btn.firstElementChild.classList.toggle('fa-pen');
    btn.firstElementChild.classList.toggle('fa-save');
    
    btn.classList.toggle('btn-warning');
    btn.classList.toggle('btn-success');
    spanInTask.innerHTML = inputInTask.value;
    var lesButtons = Array.from(document.querySelectorAll('button'));
    lesButtons.forEach(button => {
      if(button.style.visibility == "hidden"){
        button.style.visibility = "visible";
        
        lesButtons[0].disabled = false;
      }else{
        button.style.visibility="hidden";
        lesButtons[0].style.visibility="visible";
        lesButtons[0].disabled = true;
        btn.style.visibility = "visible";
      }
      
    });
  }
  };
  
  var taskChecked = (btn) => {
    if (btn.closest('.newLi').classList.contains('todo') || btn.closest('.newLi').classList.contains('deleted') ) {
    btn.closest('.newLi').classList.remove('todo');
    btn.closest('.newLi').classList.remove('deleted');
    btn.closest('.newLi').classList.add('done');
  }else{
    btn.closest('.newLi').classList.add('todo');
    btn.closest('.newLi').classList.remove('done');
  } 
};
var taskTrashed = (btn) => {
  if (btn.closest('.newLi').classList.contains('todo') || btn.closest('.newLi').classList.contains('done') ) {
    btn.closest('.newLi').classList.remove('todo')
    btn.closest('.newLi').classList.remove('done')
    btn.closest('.newLi').classList.add('deleted')
  }else{
    btn.closest('.newLi').classList.add('todo')
    btn.closest('.newLi').classList.remove('deleted')
  } 
};
form[0].addEventListener('submit',()=>{
  event.preventDefault();
  addTask()
});


