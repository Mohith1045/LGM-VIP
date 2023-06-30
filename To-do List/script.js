const inputBox = document.getElementById("writeInput");
const listContainer = document.getElementById("myList");

function addTask(){
    if(inputBox.value === ''){
        alert("Write something to add to your List")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let str = document.createElement("str");
        str.innerHTML = "\u2713";
        li.appendChild(str);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "STR"){
        e.target.parentElement.classList.add("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);


inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});