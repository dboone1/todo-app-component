
const inputField = document.querySelector(".input-field textarea"),
todoLists = document.querySelector(".todoLists"),
pendingNum = document.querySelector(".pending-num"),
clearButton = document.querySelector(".clear-button"),
addButton = document.querySelector("svg#plus.note-icon");


console.log(inputField, todoLists, pendingNum, clearButton);
    
const allTasks =  () => {
    let tasks = document.querySelectorAll(".pending");
    console.log("tasks are what? : ",tasks)
    //if tasks' length is 0 then pending num text content will be no, if not then pending num value will be task's length
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;
  
    let allLists = document.querySelectorAll(".list");
    if (allLists.length > 0) {
      todoLists.style.marginTop = "20px";
      clearButton.style.pointerEvents = "auto";
      return;
    }
    todoLists.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";
  }

//add task while we put in text area and press enter

addButton.addEventListener("click", (e) => {
    let inputVal = inputField.value.trim();
    if (inputVal.length > 0){
        let liTag = ` <li class="list pending" onclick="handleStatus(this)">
            <input type="checkbox" />
            <span class="task">${inputVal}</span>
            <i class="uil uil-trash" onclick="deleteTask(this)"></i>
          </li>`;
  
      todoLists.insertAdjacentHTML("beforeend", liTag); //inserting li tag inside the todolist div
      inputField.value = ""; //removing value from input field
      allTasks();
    }
});

inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim(); //trim fuction removes space of front and back of the inputed value
  
    //if enter button is clicked and inputed value length is greated than 0.
    if (e.key === "Enter" && inputVal.length > 0) {
      let liTag = ` <li class="list pending" onclick="handleStatus(this)">
            <input type="checkbox" />
            <span class="task">${inputVal}</span>
            <i class="uil uil-trash" onclick="deleteTask(this)"></i>
          </li>`;
  
      todoLists.insertAdjacentHTML("beforeend", liTag); //inserting li tag inside the todolist div
      inputField.value = ""; //removing value from input field
      allTasks();
    }
  });


const handleStatus = (e) => {
    const checkbox = e.querySelector("input");
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending") 
    allTasks();
}

const deleteTask = (e) => {
    e.parentElement.remove();
    allTasks();
}

//deleting all the tasks when clear button is clicked
clearButton.addEventListener("click", () => {
    todoLists.innerHTML = "";
    allTasks();
})

//storing tasks in browser history
const saveData = () => {
    //arbitrary name data saves element.innerHTML
    localStorage.setItem("data", listContainer.innerHTML);
}

