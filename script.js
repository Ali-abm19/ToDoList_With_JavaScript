
const btn = document.getElementById("btn");
const itemsList = document.getElementById("currentItems");
const counterComplete = document.getElementById("completed");
const counterAll = document.getElementById("AllItems");

let localStorage_list = [];
let retrieved_LocalStorage_list = JSON.parse(localStorage.getItem("list"));

retrieved_LocalStorage_list.map(toDoItemFromLS => {
    const itemWrapper = document.createElement("div");
    const toDo = `
    <span class="textItem">${toDoItemFromLS}</span>
    <input class="box" type="checkbox">
    <i class="material-icons deleteIcon">delete</i>
    <i class="material-icons editIcon">edit</i>`;
    if (toDoItemFromLS != "") {
        itemWrapper.innerHTML = toDo;
        itemsList.appendChild(itemWrapper); localStorage_list.push(toDoItemFromLS);
        counterAll.innerHTML++;
    }
    const checkbox = itemWrapper.querySelector(".box");
    const textToStrike = itemWrapper.querySelector(".textItem");
    if (checkbox != null) {
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
            localStorage_list.splice([localStorage_list.findIndex(x => x == textToStrike.innerHTML.toString())],1);
            localStorage.setItem("list", JSON.stringify(localStorage_list));
            counterAll.innerHTML--;
            if (checkbox.checked == true) {
                counterComplete.innerHTML--;
            }
        });

        const edit = itemWrapper.querySelector(".editIcon");
        edit.addEventListener("click", () => {
            let newText = prompt("provide the new name: ");
            if (newText != null && newText.length > 0) {
                localStorage_list[localStorage_list.findIndex(x => x == textToStrike.innerHTML.toString())] = newText;
                textToStrike.innerHTML = newText;
                localStorage.setItem("list", JSON.stringify(localStorage_list));
            }
        });
    }
});


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
        itemsList.appendChild(itemWrapper); localStorage_list.push(item.value);
        counterAll.innerHTML++;
        item.value = "";
    }

    const checkbox = itemWrapper.querySelector(".box");
    const textToStrike = itemWrapper.querySelector(".textItem");
    if (checkbox != null) {
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
            if (newText.length > 0)
                textToStrike.innerHTML = newText;
        });
    }
    localStorage.setItem("list", JSON.stringify(localStorage_list));
});
