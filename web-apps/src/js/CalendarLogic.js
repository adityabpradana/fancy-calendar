let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

let previousLastDate = (new Date(year, month, 0)).getDate();
let firstDay = (new Date(year, month, 1)).getDay();
let lastDate = (new Date(year, month + 1, 0)).getDate();

let dateArray = new Array(35);
let day = 1;

// Previous Month
for(let i = firstDay; i > 0; i--){
    dateArray[i-1]=previousLastDate--;
}

// Current Month
for(let i = firstDay; i < lastDate + firstDay; i++){
    dateArray[i] = day++;
}

// Next Month
for( let i = firstDay + lastDate; i < 35; i++){
    dateArray[i] = day++ - lastDate;
}

module.exports = {
    dateArray
};