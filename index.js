    const list = document.getElementById("list");
    const add = document.getElementById("add");
    
    add.addEventListener("click", () => {
        if (input.value == ""){
            alert("Enter a task first.");
        }else{
            let li = document.createElement("li");
            let x = document.createElement("span");
            x.innerHTML = '<i class="fa-sharp fa-solid fa-xmark"></i>';
            li.innerHTML = input.value;
            li.append(x);
            list.append(li);
            saveData();
        }
    })
    
    list.addEventListener("click", (e) => {
        if (e.target.tagName == "LI"){
            e.target.classList.toggle("checked");
        }else if (e.target.tagName == "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    })
    
    loadData();

    function saveData(){
        localStorage.setItem("data", list.innerHTML);
    }
    function loadData(){
       let data = localStorage.getItem("data");
        list.innerHTML = data;
    }
    