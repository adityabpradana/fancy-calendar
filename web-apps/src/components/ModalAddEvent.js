import React, { useState } from 'react';
import { DateInput } from 'semantic-ui-calendar-react';
import { Modal, Form, Button } from 'semantic-ui-react';

const ModalAddEvent = () => {
    let date = new Date();

    let [eventName, setEventName] = useState('');
    let [eventDesc, setEventDesc] = useState('');
    let [eventDate, setEventDate] = useState(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`);

    const handleChange = (event, {name, value}) => {
        setEventDate(value)
    }

    return (
        <Modal size="mini" trigger={<Button content='Add Event' icon='add' labelPosition='left' />}>
            <Modal.Header>
                Add New Event
            </Modal.Header>
            <Modal.Content>
            <Form>
                <Form.Field>
                    <label>Event Name  {eventName} {String(eventDate)}</label>
                    <input placeholder='Write event name...' onChange={e => setEventName(e.target.value)} value={eventName}/>
                </Form.Field>
                <Form.Field>
                    <label>Event Description</label>
                    <input placeholder='Write event description...' onChange={e => setEventDesc(e.target.value)} value={eventDesc}/>
                </Form.Field>
                <DateInput value={eventDate} onChange={handleChange}/>
                <Button type='submit'>Submit</Button>
            </Form>
            </Modal.Content>
        </Modal>
    )
}

export default ModalAddEvent;