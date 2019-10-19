import React from 'react';
import '../App.css';
import { chunk } from 'lodash';

const MiniCalendar = ({ dateArray }) => {
    let datePerWeek = chunk(dateArray, 7)
    let monthlyGrid = [];
    let active = false;

    for(let i = 0; i < 5; i++){
        let weeklyGrid = [];
    
        for(let j = 0; j < datePerWeek[0].length; j++){
            if(datePerWeek[i][j] === 1){
                active = !active
            }

            weeklyGrid.push(<div key={i +'-'+ j} style={{ flex: 1, border: '0.1px #666666 solid', padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: active ? '#eee' : '#313131' }}>
                {datePerWeek[i][j]}
            </span>
            </div>)
        }      
        
        monthlyGrid.push(<div key={`week-${i}`} style={{ display: 'flex', flex: 1 }}>{weeklyGrid}</div>)
    }

    return monthlyGrid
}


export default MiniCalendar;