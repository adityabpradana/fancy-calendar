import React from 'react';
import CalendarDay from './CalendarDay';
import '../App.css';
import { chunk } from 'lodash';

const CalendarTable = ({ dateArray }) => {
    let datePerWeek = chunk(dateArray, 7)
    let monthlyGrid = [];

    for(let i = 0; i < 5; i++){
        let weeklyGrid = [];
    
        for(let j = 0; j < datePerWeek[0].length; j++){
            weeklyGrid.push(<CalendarDay key={`${i}-${j}`} day={datePerWeek[i][j]} />)
        }      
        
        monthlyGrid.push(<div key={`week-${i}`} style={{ display: 'flex', flex: 1 }}>{weeklyGrid}</div>)
    }

    return monthlyGrid
}


export default CalendarTable;