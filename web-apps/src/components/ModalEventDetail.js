import React from 'react';
import { Modal, Button, Header } from 'semantic-ui-react';

const ModalAddEvent = ({ event }) => {
    return (
        <Modal trigger={<Button size="tiny" color="blue">{event.name}</Button>} size="tiny">
            <Modal.Header>
                Detail
            </Modal.Header>
            <Modal.Content>
                <Header>{event.name}</Header>
                <p>{event.desc}</p>
            </Modal.Content>
        </Modal>
    )
}

export default ModalAddEvent;