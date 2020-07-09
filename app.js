const todo_list = document.querySelector(".todo_list");
const items = document.querySelectorAll(".todo_item");

for(let item of items){
    item.draggable = true;
}

todo_list.addEventListener("dragstart", (e) => {
   e.target.classList.add("select");
});

todo_list.addEventListener("dragend", (e) => {
   e.target.classList.remove("select");
});

todo_list.addEventListener("dragover", (ev) => {
    ev.preventDefault();

    const active_elem = todo_list.querySelector(".select");
    const over_elem = ev.target;

    const isMoveable = active_elem !== over_elem && over_elem.classList.contains("todo_item");
    if(!isMoveable){
        return;
    }

    const nextElem = (over_elem === active_elem.nextElementSibling) ? over_elem.nextElementSibling : over_elem;

    todo_list.insertBefore(active_elem, nextElem);

});




