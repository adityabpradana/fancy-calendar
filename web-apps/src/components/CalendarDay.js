import React from 'react';
import '../App.css';
import ModalEventDetail from './ModalEventDetail';

const CalendarDay = ({ day }) => {
    return (
        <div style={{ flex: 1, border: '0.1px #f7f7f7 solid' }}>
            <div className="flex" style={{ justifyContent: 'flex-end' }}>
                <p style={{ padding: '5px' }}>{ day }</p>
            </div>
            <div>
                <ModalEventDetail/>
                <p>Event</p>
            </div>
        </div>
    )
}

export default CalendarDay;