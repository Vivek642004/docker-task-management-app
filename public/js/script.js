const modal = document.getElementById("taskModal");
const addBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close");

if (addBtn) {
    addBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
const saveBtn = document.getElementById("saveTask");
const taskList = document.getElementById("taskList");

saveBtn.addEventListener("click", () => {

    const title = document.getElementById("taskTitle").value;
    const desc = document.getElementById("taskDesc").value;
    const date = document.getElementById("taskDate").value;

    if (title.trim() === "") {
        alert("Please enter task title");
        return;
    }

    const task = document.createElement("div");

    task.className = "task";

    task.innerHTML = `
        <input type="checkbox">

        <div class="task-info">
            <h3>${title}</h3>
            <p>${desc}</p>
        </div>

        <span class="status pending">Pending</span>

        <span class="date">${date}</span>

        <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    taskList.appendChild(task);
    attachDeleteEvents();
    attachEditEvents();
    attachCheckboxEvents();
    updateCards();
    
    

    modal.style.display = "none";

    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDesc").value = "";
    document.getElementById("taskDate").value = "";
});
function attachDeleteEvents() {

    const deleteButtons = document.querySelectorAll(".delete");

    deleteButtons.forEach((btn) => {

        btn.onclick = function () {

            this.parentElement.parentElement.remove();
            updateCards();
            

        };

    });

}

attachDeleteEvents();
function attachEditEvents() {

    const editButtons = document.querySelectorAll(".edit");

    editButtons.forEach((btn) => {

        btn.onclick = function () {

            const task = this.parentElement.parentElement;

            const title = task.querySelector("h3");

            const newTitle = prompt("Edit Task", title.innerText);

            if (newTitle && newTitle.trim() !== "") {
                title.innerText = newTitle;
            }

        };

    });

}

attachEditEvents();
updateCards();

function updateCards() {

    const total = document.querySelector(".cards .card:nth-child(1) h2");
    const completed = document.querySelector(".cards .card:nth-child(2) h2");
    const pending = document.querySelector(".cards .card:nth-child(3) h2");

    const allTasks = document.querySelectorAll(".task");

    const completedTasks = document.querySelectorAll(".task input:checked");

    total.innerText = allTasks.length;
    completed.innerText = completedTasks.length;
    pending.innerText = allTasks.length - completedTasks.length;
}
function attachCheckboxEvents() {

    const checkboxes = document.querySelectorAll(".task input[type='checkbox']");

    checkboxes.forEach((checkbox) => {

        checkbox.onchange = function () {

            const task = this.parentElement;

            const status = task.querySelector(".status");

            if (this.checked) {
                status.innerText = "Completed";
                status.classList.remove("pending");
                status.classList.add("completed");
            } else {
                status.innerText = "Pending";
                status.classList.remove("completed");
                status.classList.add("pending");
            }

            updateCards();
            
        };

    });

}

attachCheckboxEvents();
const searchInput = document.querySelector(".search");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const tasks = document.querySelectorAll(".task, .task-item");

    tasks.forEach((task) => {

        const title = task.querySelector("h3").innerText.toLowerCase();

        if (title.includes(value)) {
            task.style.display = "";
        } else {
            task.style.display = "none";
        }

    });

});
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerText="☀️";
    }else{
        themeBtn.innerText="🌙";
    }

});