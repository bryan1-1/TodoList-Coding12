// input and button that add a new task
var add = document.querySelector("#add-task");
var input = document.querySelector("#input-task")
//side buttons that select task according to their state
var Do = document.querySelector(".btn-do");
var done = document.querySelector(".btn-done");
var all = document.querySelector(".btn-all");
//ul to add lists
var ul = document.querySelector("ul")
var id = 0;
var clsD=id+10;
var idBtn =10000+id;
// Highlights the list with it's personal ID 

function highlight(di) {
    var bg = document.getElementById(di).style.backgroundColor;
    var color = "";
    if(bg != "green"){
        color= "green";
        this.document.getElementById(di).style.backgroundColor = color
    this.document.getElementById(di).classList.add("done")
}else if(bg==="green"){
        color="white";
        this.document.getElementById(di).style.backgroundColor = color
this.document.getElementById(di).classList.remove('done')}}
//function that allows to eddit the title of the list
function editLi(di) {
    var contenteditable = document.getElementById(di).contentEditable;
    if(contenteditable == "inherit" || contenteditable == "false"){
     document.getElementById(di).contentEditable = true;}else{
     document.getElementById(di).contentEditable = false;}}
//Delete list by targetting the id from the generator
function delet(di) {
     document.getElementById(di).remove()}
//Creates a new list with it'S child elements and generates a new ID for each addition each time
add.addEventListener("click",()=>{
   //var id=input.value.toString()
  var li = document.createElement("li");
  ul.appendChild(li)
  li.innerHTML=`<div id="${id}" class="row "><h5 id='${idBtn}' contenteditable="false">${input.value}</h5>
  <button type="button" onclick="highlight('${id}')" class="float-right valid border rounded-circle"><i class="fas fa-check"></i></button >
  <button type="button" id="${idBtn}" onclick="editLi('${idBtn}')" class="border rounded-circle"><i class="far fa-edit"></i></button>
  <button type="button" onclick="delet('${id}')"class="border rounded-circle"><i class="fas fa-trash"></i></button>`
  li.id=`${id}`
  li.className=`${clsD}`
input.value=""
 id++
 idBtn++
 clsD++
done.addEventListener("click",()=>{
    if(li.classList.contains("done")){
        li.style.visibility="visible"
    }else{li.style.visibility="hidden"}})
Do.addEventListener("click",()=>{
    if(li.classList.contains("done")){
        li.style.visibility="hidden"
    }else{li.style.visibility="visible"}})
all.addEventListener("click",()=>{
    if(li.classList.contains("done")){
        li.style.visibility="visible"
    }else{li.style.visibility="visible"}})})