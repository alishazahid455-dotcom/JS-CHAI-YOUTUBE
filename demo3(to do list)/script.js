const input = document.getElementById("task");
const button = document.getElementById("addBtn");
const list = document.getElementById("list");

button.addEventListener("click", function () {

    if (input.value === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.innerText = input.value;

    // Create delete button
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    // Delete event
    delBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
});