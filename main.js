let add = document.getElementsByClassName("add");
let del = document.getElementsByClassName("delete");
let taskContainer = document.querySelector(".tasks");
let tasks = taskContainer.children;
let arr = [];
for (let i = 1; i <= window.localStorage.length; i++) {
  arr = window.localStorage.getItem("theContainer");
  arr = arr.split(",");
  console.log(arr);
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != "") {
        let task = document.createElement("div");
        task.classList.add("task");
        let pr = document.createElement("p");
        pr.innerHTML = `${arr[i]}`;
        let but = document.createElement("button");
        but.classList.add("delete");
        but.innerHTML = "delete";
        task.appendChild(pr);
        task.appendChild(but);
        taskContainer.appendChild(task);
      }
    }
  }
}
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add")) {
    let content = document.getElementsByTagName("input")[0].value;
    if (content.length > 0) {
      let task = document.createElement("div");
      task.classList.add("task");
      let pr = document.createElement("p");
      pr.innerHTML = `${content}`;
      let but = document.createElement("button");
      but.classList.add("delete");
      but.innerHTML = "delete";
      task.appendChild(pr);
      task.appendChild(but);
      arr.push(`${content}`);
      taskContainer.appendChild(task);
      window.localStorage.setItem("theContainer", arr);
      document.getElementsByTagName("input")[0].value = "";
    }
  } else if (e.target.classList.contains("delete")) {
    let target = e.target;
    for (let i = 0; i < arr.length; i++) {
      if (target.previousElementSibling.innerHTML === arr[i]) {
        arr.splice(i, 1);
        if (arr.length == 0) {
          window.localStorage.clear();
        } else {
          window.localStorage.setItem("theContainer", arr);
        }
        break;
      }
    }
    target.parentElement.remove();
  }
});
