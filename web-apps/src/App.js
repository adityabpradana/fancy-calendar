import React from 'react';
import ModalAddEvent from './components/ModalAddEvent';
import CalendarTable from './components/CalendarTable';
import { dateArray } from './js/CalendarLogic';
import './App.css';

function App() {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  return (
    <div className="App">
      <div className="flex">
        <div className="sidebar full-height" style={{ flex: 3 }}>
          <ModalAddEvent/>
          <div>
            <h1>March <span>2019</span></h1>
          </div>
          <div>
            {/* <CalendarTable dateArray={dateArray}/> */}
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
