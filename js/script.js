const input = document.getElementById("input-box");
const list = document.getElementById("list-container");

function addTask(){
    if(input.value === ""){
        alert("input is empty");
    }else{
        let li = document.createElement("li")
        li.innerHTML =input.value;
        list.appendChild(li);
        li.classList.add("before:bg-uncheked");
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = ""
    saveData();
}  

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        e.target.classList.toggle("before:bg-checked")
        e.target.classList.toggle("before:bg-uncheked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
       }

},false);

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data")
}
showTask();