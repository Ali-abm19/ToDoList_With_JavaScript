
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
    <span>${item.value}</span> <input id="${item.value + "box"}" type="checkbox"> <i class="material-icons">delete</i>`;
    itemWrapper.innerHTML = toDo;
    itemsList.appendChild(itemWrapper);
});

const checkbox = itemsList.querySelector(".cBox");

//  checkbox.addEventListener(change, ()=>{

//  });

// function addItem(){
//     let item = document.getElementById("itemToAdd").Value;
//     return item
// }
