import React, { useEffect } from 'react';
import ModalAddEvent from './components/ModalAddEvent';
import CalendarTable from './components/CalendarTable';
import { dateArray } from './js/CalendarLogic';
import './App.css';
import db from './utils/FirestoreConfig';

function App() {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  useEffect(() => {
    db.collection("event")
    .onSnapshot(function(querySnapshot) {
        var events = [];
        querySnapshot.forEach(function(doc) {
            events.push(doc.data());
        });
        console.log(events)
    });
  }, [db]);

  return (
    <div className="App">
      <div className="flex">
        <div className="sidebar full-height" style={{ flex: 3 }}>
          <div className='flex' style={{ padding: '20px' }}>
            <ModalAddEvent/>
          </div>
          <div>
            <h1>March <span>2019</span></h1>
          </div>
          <div>

          </div>
        </div>
        <div className="wrapper full-height" style={{ flex: 13 }}>
          <div className="flex" style={{ flex: 2 }}>

          </div>
          <div className="flex" style={{ flex: 1, backgroundColor: '#325635' }}>
            {
              days.map( day => {
                return <div key={day} style={{ flex: 1 }}><h4 style={{ textAlign: 'right' }}>{day}</h4></div>
              })
            }
          </div>
          <div className="wrapper" style={{ flex: 13 }}>
            <CalendarTable style={{ flex: 1 }} dateArray={dateArray}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
