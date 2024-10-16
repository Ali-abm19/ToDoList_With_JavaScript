
const btn = document.getElementById("btn");
const itemsList = document.getElementById("currentItems");
const counterComplete = document.getElementById("completed");
const counterAll = document.getElementById("AllItems");

// localStorage(itemsList);

btn.addEventListener("click", () => {
    const item = document.getElementById("itemToAdd");
    const itemWrapper = document.createElement("div");
    const toDo = `
    <span class="textItem">${item.value}</span>
    <input class="box" type="checkbox">
    <i class="material-icons deleteIcon">delete</i>
    <i class="material-icons editIcon">edit</i>`;
    if (item.value != "") {
        itemWrapper.innerHTML = toDo;
        itemsList.appendChild(itemWrapper);
        counterAll.innerHTML++;
        item.value = "";
    }

    const checkbox = itemWrapper.querySelector(".box");
    const textToStrike = itemWrapper.querySelector(".textItem");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked == true) {
            counterComplete.innerHTML++;
            textToStrike.style.textDecoration = "line-through";
        }
        else {
            counterComplete.innerHTML--;
            textToStrike.style.textDecoration = "none";
        }
    });

    const deleteIcon = itemWrapper.querySelector(".deleteIcon");
    deleteIcon.addEventListener("click", () => {
        itemWrapper.innerHTML = null;
        counterAll.innerHTML--;
        if (checkbox.checked == true) {
            counterComplete.innerHTML--;
        }
    });

    const edit = itemWrapper.querySelector(".editIcon");
    edit.addEventListener("click", () => {
        let newText = prompt("provide the new name: ");
        textToStrike.innerHTML = newText;
    });
});