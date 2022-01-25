////////// Random Tables //////////

// const randomNumber = (min, max) => {
//     const r = Math.random()*(max-min) + min;
//     return Math.floor(r);
// }

// function createTable() {
//     const newEl = document.createElement("table");

//     let tableStart = '<thead><tr><th>ID</th><th>наименование</th></tr></thead><tbody>';
//     let tableEnd = '</tbody>';
//     let tableBody = '';
//     let items = ["Трубопроводная арматура", "Регуляторы газового давления", "Отдельные соединительные элементы, детали трубопровода"];
    
//     for (let index = 0; index < randomNumber(4, 10); index++) {
//         tableBody += '<tr><th>'+(index+1)+'</th><td>'+(items[Math.floor(Math.random()*items.length)])+'</td></tr>';
//     }
//     newEl.innerHTML = tableStart + tableBody + tableEnd;

//     return newEl
// }


////////// Static Tables ////////// 
let items = [`<table><thead><tr><th>ID</th><th>наименование</th></tr></thead><tbody><tr><th>1</th><td>Регуляторы газового давления</td></tr><tr><th>2</th><td>Трубопроводная арматура</td></tr><tr><th>3</th><td>Отдельные соединительные элементы, детали трубопровода</td></tr><tr><th>4</th><td>Отдельные соединительные элементы, детали трубопровода</td></tr><tr><th>5</th><td>Трубопроводная арматура</td></tr><tr><th>6</th><td>Отдельные соединительные элементы, детали трубопровода</td></tr></tbody></table>`,
    `<table><thead><tr><th>ID</th><th>наименование</th></tr></thead><tbody><tr><th>1</th><td>Трубопроводная арматура</td></tr><tr><th>2</th><td>Трубопроводная арматура</td></tr><tr><th>3</th><td>Отдельные соединительные элементы, детали трубопровода</td></tr><tr><th>4</th><td>Регуляторы газового давления</td></tr><tr><th>5</th><td>Трубопроводная арматура</td></tr><tr><th>6</th><td>Трубопроводная арматура</td></tr><tr><th>7</th><td>Отдельные соединительные элементы, детали трубопровода</td></tr></tbody></table>`,
    `<table><thead><tr><th>ID</th><th>наименование</th></tr></thead><tbody><tr><th>1</th><td>Трубопроводная арматура</td></tr><tr><th>2</th><td>Трубопроводная арматура</td></tr><tr><th>3</th><td>Отдельные соединительные элементы, детали трубопровода</td></tr><tr><th>4</th><td>Отдельные соединительные элементы, детали трубопровода</td></tr><tr><th>5</th><td>Трубопроводная арматура</td></tr><tr><th>6</th><td>Регуляторы газового давления</td></tr></tbody></table>`];

let itemsEl = []

for (let index = 0; index < items.length; index++) {
    const newEl = document.createElement("table");
    newEl.innerHTML = items[index];
    itemsEl.push(newEl);
}
