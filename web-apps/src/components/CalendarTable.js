import React from 'react';
import CalendarDay from './CalendarDay';
import '../App.css';
import { chunk } from 'lodash';

const CalendarTable = ({ dateArray, events, month, year}) => {
    let datePerWeek = chunk(dateArray, 7)
    let monthlyGrid = [];
    let active = false;

    for(let i = 0; i < 5; i++){
        let weeklyGrid = [];
    
        for(let j = 0; j < datePerWeek[0].length; j++){
            let date = (datePerWeek[i][j] < 10 ? '0' : '') + datePerWeek[i][j]
            month = (month < 10? '0' : '') + month;
            let key = `${date}-${month}-${year}`
            let eventList = []

            for(let k = 0; k < events.length; k++){
                if(events[k].event.date === key){
                    eventList.push(events[k])
                } 
            }

            if(datePerWeek[i][j] === 1){
                active = !active;    
            }

            weeklyGrid.push(<CalendarDay key={key} day={datePerWeek[i][j]} events={eventList} active={active}/>)
        }      
        
        monthlyGrid.push(<div key={`week-${i}`} style={{ display: 'flex', flex: 1 }}>{weeklyGrid}</div>)
    }

    return monthlyGrid
}


export default CalendarTable;