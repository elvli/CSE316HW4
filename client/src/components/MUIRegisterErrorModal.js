import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

export default function MUIRegisterErrorModal() {
    const { store } = useContext(GlobalStoreContext);

    function handleCloseModal(event) {
        event.stopPropagation();
        store.hideModals();
    }

    return (
        <Modal
            open={store.registerError == true}
        >
            <Box sx={style}>
                <div className="modal-dialog">
                <header className="dialog-header">
                    {store.errorMessage}
                </header>
                <div id="confirm-cancel-container">
                    <button
                        id="dialog-no-button"
                        className="modal-button"
                        onClick={handleCloseModal}
                    >Close</button>
                </div>
            </div>
            </Box>
        </Modal>
    );
}