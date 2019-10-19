import React from 'react';
import '../App.css';
import ModalEventDetail from './ModalEventDetail';

const CalendarDay = ({ day, events, active }) => {
    return (
        <div style={{ flex: 1, border: '0.1px #eeeeee solid', padding: '5px', backgroundColor: active ? '#fff' : '#eee' }}>
            <div className="flex" style={{ justifyContent: 'flex-end' }}>
                <p>{ day }</p>
            </div>
            <div style={{ padding: '5px' }}>
                {
                    events.map( ({event}, i) => {
                       return <ModalEventDetail key={event + i} event={event}/>
                    })
                }
            </div>
        </div>
    )
}

export default CalendarDay;