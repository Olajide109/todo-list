const enterTask = document.querySelector(".enter-task");
const taskList = document.querySelector(".list-container");
const clearTask = document.querySelector(".clear-task");

function submitTask(e){
    e.preventDefault();

    if(enterTask.value === ''){
        alert("Please enter a task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = enterTask.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask()

clearTask.addEventListener('click', function (e){
    if(confirm('Are you sure')){
        taskList.innerHTML = "";
    }
    saveData();
});
