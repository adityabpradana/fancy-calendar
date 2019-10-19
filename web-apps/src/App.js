import React, { useEffect, useState } from 'react';
import ModalAddEvent from './components/ModalAddEvent';
import CalendarTable from './components/CalendarTable';
import MiniCalendar from './components/MiniCalendar';
import { Button } from 'semantic-ui-react';
import { dates, currentMonth, currentYear, monthString } from './js/CalendarLogic';
import './App.css';
import db from './utils/FirestoreConfig';

function App() {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [dateArray, setDateArray] = useState(dates);
  const [events, setEvents] = useState([]);
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  function nextMonth(){
    if(month > 11){
      setMonth(1)
      setYear(year+1)
    } else {
      setMonth(month+1)
    }
  }

  function previousMonth(){
    if(month < 2){
      setMonth(11)
      setYear(year-1)
    } else {
      setMonth(month-1)
    }
  }

  useEffect(() => {
    setDateArray(dates(month, year))
  }, [month, year])

  useEffect(() => {
    db.collection("event")
    .onSnapshot(function(querySnapshot) {
        var events = [];
        querySnapshot.forEach(function(doc) {
            events.push(doc.data());
        });
        setEvents(events);
    });
  }, []);

  return (
    <div className="App">
      <div className="flex">
        <div className="sidebar full-height" style={{ flex: 3 }}>
          <div className='flex' style={{ padding: '20px' }}>
            <ModalAddEvent/>
          </div>
          <div style={{ padding: '10px 20px' }}>
            <h2 style={{ color: '#fff'}}>{monthString(month)} {year}</h2>
          </div>
          <div style={{ padding: '0 20px' }}>
            <MiniCalendar dateArray={dateArray}/>
          </div>
        </div>
        <div className="wrapper full-height" style={{ flex: 13 }}>
          <div className="flex" style={{ flex: 2, justifyContent: 'space-between', margin: '20px' }}>
            <div>
              <Button content='Today'/>
            </div>
            <div>
              <Button.Group>
                <Button icon='left chevron' onClick={previousMonth}/>
                <Button content={monthString(month)} />
                <Button icon='right chevron' onClick={nextMonth}/>
              </Button.Group>
            </div>
            <div>
              <Button basic content={year} />
            </div>
          </div>
          <div className="flex" style={{ flex: 1 }}>
            {
              days.map( day => {
                return <div key={day} style={{ flex: 1 }}><h4 style={{ textAlign: 'right', padding: '10px' }}>{day}</h4></div>
              })
            }
          </div>
          <div className="wrapper" style={{ flex: 13 }}>
            <CalendarTable style={{ flex: 1 }} dateArray={dateArray} events={events} month={month} year={year}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
