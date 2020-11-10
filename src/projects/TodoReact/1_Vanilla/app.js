/*

1) Load Events function, which will select the parent nodes, or the buttons directly
2) Create the functions for those events, and use getElementById and querySelector
3) Remember "e" would be the target of the click, so take advantage of changing parent and children of that


*/

// load events on the page: Submit, delete, update
function loadEvents() {
  document.getElementById("submission").addEventListener("click", addItem);
  document.querySelector("ul").addEventListener("click", deleteOrUpdate);
}

loadEvents();

// todo: Add item function
function addItem() {
  // get the text input
  let input = document.getElementById("newItemInput");
  // get the ul
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerHTML = `<div class = "itemContainer"><span class="item">${input.value}</span><div class="buttonContainer"><input></input><button class="update">Update</button><button class="delete">X</button></div></div> `;
  ul.appendChild(li);
}

function deleteOrUpdate(e) {
  if (e.target.className === "delete") {
    let remove = e.target.parentNode.parentNode.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
  }
  if (e.target.className === "update") {
    // get the text input
    let input = e.target.parentNode.querySelector("input").value;
    e.target.parentNode.parentNode.querySelector(
      "span"
    ).innerHTML = `<span class="item">${input}</span>`;
  }
}
