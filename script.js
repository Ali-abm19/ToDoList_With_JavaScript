
const btn = document.getElementById("btn");
const itemsList = document.getElementById("currentItems");

// btn.onclick(() => {
//     let item = document.getElementById("itemToAdd");
//     let itemWrapper = document.createElement("div");

//     let i = `<p>${item}</p>`
//     itemWrapper.innerHTML.appendChild(i);
//     console.log(itemWrapper);
//     itemsList.innerHTML.appendChild(itemWrapper);
// });

btn.addEventListener("click", () => {
    const item = document.getElementById("itemToAdd");
    const itemWrapper = document.createElement("div");
    const toDo = `
    <span class="textItem">${item.value}</span> <input class="box" type="checkbox"> <i class="material-icons">delete</i>`;
    itemWrapper.innerHTML = toDo;
    itemsList.appendChild(itemWrapper);
    item.value = "";


    const checkbox = itemWrapper.querySelector(".box");
    const textToStrike = itemWrapper.querySelector(".textItem");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked == true)
            textToStrike.style.textDecoration = "line-through";
        else
            textToStrike.style.textDecoration = "none";
    });

    const icon = itemWrapper.querySelector(".material-icons");
    icon.addEventListener("click", ()=>{
        itemWrapper.innerHTML = null;
    });
});