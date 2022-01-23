const tree = document.querySelectorAll(".up"),
        arrowUp = document.querySelectorAll(".up img"),
        arrowSecond = document.querySelectorAll(".second img"),
        end = document.querySelectorAll(".end"),
        branch = document.querySelectorAll(".second"),
        contextmenu = document.querySelectorAll(".choose"),
        newTab = document.querySelectorAll(".new-tab");

for (let i=0;i<tree.length;i++){
    tree[i].addEventListener("click", ()=>{
        arrowUp[i].classList.toggle("rotate");
        branch[i].classList.toggle("none");
        end[i].classList.add("none");
        end[i].classList.remove("hover")
        contextmenu[i].classList.add("none");
    });
    
    branch[i].addEventListener("click", ()=>{
        arrowSecond[i].classList.toggle("rotate");
        end[i].classList.toggle("none");
        end[i].classList.remove("hover")
        contextmenu[i].classList.add("none");
    });
    
    end[i].addEventListener("contextmenu", ()=>{
        end[i].classList.toggle("hover")
        contextmenu[i].classList.toggle("none");
    });
    
    window.addEventListener("click", ()=>{
        end[i].classList.remove("hover");
        contextmenu[i].classList.add("none");
    });

    newTab[i].addEventListener("click", ()=>{
        window.open("./index.html","_blank");
    });
}



function generateTable(rows) {
    let tableStart = '<thead><tr><th>ID</th><th>наименование</th></tr></thead><tbody>';
    let tableEnd = '</tbody>';
    let tableBody = '';
    
    for (let index = 0; index < rows; index++) {
        tableBody += '<tr><th></th><td></td></tr>';
    }
    return tableStart + tableBody + tableEnd;
}

function createTeble() {
    let items = ["Трубопроводная арматура", "Регуляторы газового давления", "Отдельные соединительные элементы, детали трубопровода"];
    const td = document.querySelectorAll("td"),
        th = document.querySelectorAll("tbody th");
    
    for (let i=0;i<td.length;i++){
        td[i].textContent = items[Math.floor(Math.random()*items.length)];
        th[i].textContent = i+1;   
    }
}

function randomNumber(min, max){
    const r = Math.random()*(max-min) + min;
    return Math.floor(r);
}


const li = document.querySelectorAll("li"),
    first = document.querySelector(".first"),
    h2 = document.querySelector(".main h2"),
    content = document.querySelector(".content"),
    secondMain = document.querySelector(".second-main");

for (let index = 0; index < li.length; index++) {
    li[index].addEventListener("click", ()=> {
        for (let index = 0; index < li.length; index++){
            li[index].classList.remove("hover-li");
        }
        li[index].classList.add("hover-li");
        first.classList.add("none");
        secondMain.classList.remove("none");
        h2.textContent = li[index].textContent;
        content.textContent = "";
        if ((index==0)&(content.textContent=="")){
            const newEl = document.createElement("table");
            newEl.innerHTML = generateTable(randomNumber(4, 15));
            content.append(newEl);
            createTeble();
        }
    })
}



const toLeft = document.querySelector(".to-left"),
    input = document.querySelector("input"),
    left = document.querySelector(".left"),
    wrapLeft = document.querySelector(".wrap-left"),
    element = document.querySelectorAll(".element");
for (let i = 0; i < element.length; i++) {
    toLeft.addEventListener("click", ()=>{
        element[i].classList.toggle("none");
        input.classList.toggle("none");
        left.classList.toggle("none");
        wrapLeft.classList.toggle("wrap-left-bg");
    })
    
    wrapLeft.addEventListener("click", ()=>{
        element[i].classList.toggle("none");
        input.classList.toggle("none");
        left.classList.toggle("none");
        wrapLeft.classList.toggle("wrap-left-bg");
    })
}