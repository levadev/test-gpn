// Дерево элементов
const tree = document.querySelectorAll(".up"),
        arrowUp = document.querySelectorAll(".up img"),
        arrowSecond = document.querySelectorAll(".second img"),
        end = document.querySelectorAll(".end"),
        branch = document.querySelectorAll(".second"),
        h2 = document.querySelector(".main h2"),
        mainT = document.querySelector(".main"),
        h1 = document.querySelector(".main h1"),
        secondMain = document.querySelector(".second-main"),
        li = document.querySelectorAll("li"),
        first = document.querySelector(".first"), 
        content = document.querySelector(".content"),
        toLeft = document.querySelector(".to-left"),
        input = document.querySelector("input"),
        left = document.querySelector(".left"),
        wrapLeft = document.querySelector(".wrap-left"),
        container = document.querySelector(".container"),
        element = document.querySelectorAll(".element"),
        nav = document.querySelector(".nav");





        
        
function contxt(node, table) {
    let div = document.createElement("div");
    div.className = "choose";
    div.innerHTML = `<a class=\"new-tab\" target=\"_blank\" href=\"./index.html?table=${table}\">Открыть в другой вкладке</a><p>Переименовать</p><p>Удалить</p>`;
    let state = 0;
    node.addEventListener("contextmenu", ()=>{
        if (state === 0) {
            node.after(div);
            state = 1
        } else {
            div.remove();
            state = 0
        };
    });

    window.addEventListener("click", ()=>{
        div.remove();
        state = 0
    });
}

////////// Random Tables //////////
// const arrayTable = [createTable(), createTable(), createTable()];

////////// Static Tables ////////// 
const arrayTable = itemsEl;


  

const params = location.search;
const onlyTable = params.includes('table=');        
const paramTableIndex = parseInt(params.split('table=')[1]);

if (onlyTable) {
    left.classList.add("none");
    nav.classList.add("none");
    first.classList.add("none");
    mainT.classList.add("none");
    container.innerHTML = '';
    
    container.append(arrayTable[paramTableIndex]);
}

function init(node, number) {
    first.classList.add("none");
    secondMain.classList.remove("none");
    h1.textContent = node.textContent;

    if (h2.textContent == "") {
        alert("Что бы продолжить выберите нужную вкладку: «Продукция», «Об объектах», «Дочерние общества».");
    } 
    if (li[0].classList.contains("hover-li")){
        content.innerHTML = '';
        content.append(arrayTable[number]);
    }
}

// console.log(element[0].children[0].classList.contains("up"))
// Следует пройтись по element[i].children[i]
for (let i=0;i<tree.length;i++){
    tree[i].addEventListener("click", ()=>{
        arrowUp[i].classList.toggle("rotate");
        branch[i].classList.toggle("none");
        end[i].classList.add("none");
        init(tree[i], 0);
    });
    
    branch[i].addEventListener("click", ()=>{
        arrowSecond[i].classList.toggle("rotate");
        end[i].classList.toggle("none");
        init(branch[i], 1);
    });

    contxt(tree[i], 0);
    contxt(branch[i], 1);
    contxt(end[i], 2);

    end[i].addEventListener("click", ()=>{
        end[i].classList.add("hover");
        init(end[i], 2);
    });
}


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
        for (let i = 0; i < arrayTable.length; i++) {
            if ((index==0)&(content.textContent=="")&(h1.textContent !== '')) {
                content.innerHTML = '';
                content.append(arrayTable[i]);
            }
        }
    })
}

// Левое меню
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
