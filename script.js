const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
  console.log(inputEl.value);
});

function toDoList() {
  let newTask = inputEl.value;
  let liEl = document.createElement("li");
  liEl.innerText = inputEl.value;
  ulEl.append(liEl);
  inputEl.value = "";
  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = `<i class="fa-solid check-icon fa-check-to-slot"
    >`;
liEl.appendChild(checkBtnEl);

const trashbtnEl = document.createElement("div")
trashbtnEl.innerHTML = `<i class="fa-solid fa-trash">`
liEl.append(trashbtnEl);

checkBtnEl.addEventListener("click",()=>{
    liEl.classList.toggle("checked");

})

trashbtnEl.addEventListener("click",()=>{
    liEl.remove();
})
}



