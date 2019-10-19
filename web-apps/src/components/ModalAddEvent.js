import React, { useState } from 'react';
import { DateInput } from 'semantic-ui-calendar-react';
import { Modal, Form, Button } from 'semantic-ui-react';
import db from '../utils/FirestoreConfig';

const ModalAddEvent = () => {
    let date = new Date();

    let [open, setOpen] = useState(false);
    let [eventName, setEventName] = useState('');
    let [eventDesc, setEventDesc] = useState('');
    let [eventDate, setEventDate] = useState(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`);

    const handleChange = (event, {name, value}) => {
        setEventDate(value)
    }

    const addEvent = () => {
        db.collection("event").add({
            event: {
                name: eventName,
                desc: eventDesc,
                date: eventDate
            }
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            setOpen(false)
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

    return (
        <Modal open={open} size="mini"
        closeIcon
        onClose={ () => setOpen(false) }
        trigger={<Button content='Add Event' icon='add' labelPosition='left' onClick={ e => setOpen(true)} fluid/>}>
            <Modal.Header>
                Add New Event
            </Modal.Header>
            <Modal.Content>
            <Form onSubmit={addEvent}>
                <Form.Field>
                    <label>Event Name  {eventName} {String(eventDate)}</label>
                    <input placeholder='Write event name...' onChange={e => setEventName(e.target.value)} value={eventName}/>
                </Form.Field>
                <Form.Field>
                    <label>Event Description</label>
                    <input placeholder='Write event description...' onChange={e => setEventDesc(e.target.value)} value={eventDesc}/>
                </Form.Field>
                <DateInput value={eventDate} onChange={handleChange}/>
                <Form.Button content='Submit'/>
            </Form>
            </Modal.Content>
        </Modal>
    )
}

export default ModalAddEvent;