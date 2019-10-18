import React, { useState } from 'react';
import { Modal, Header, Label } from 'semantic-ui-react';

const ModalAddEvent = () => {
    return (
        <Modal trigger={<Label>Event</Label>} size="tiny">
            <Modal.Header>
                Add New Event
            </Modal.Header>
            <Modal.Content>
            <p>Deskripsi Event</p>
            </Modal.Content>
        </Modal>
    )
}

export default ModalAddEvent;