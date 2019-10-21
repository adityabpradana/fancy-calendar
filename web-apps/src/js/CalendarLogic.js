const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

let date = new Date();
let y = date.getFullYear();
let m =  date.getMonth() + 1;

function getDateArray(month = m, year = y){
    let previousLastDate = (new Date(year, month, 0)).getDate();
    let firstDay = (new Date(year, month -1, 1)).getDay();
    let lastDate = (new Date(year, month, 0)).getDate();
    
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

    return dateArray;
}

module.exports = {
    dates: getDateArray,
    currentMonth: m,
    currentYear: y,
    monthString(index){
        return months[index-1]
    }
};