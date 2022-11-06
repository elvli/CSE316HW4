import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

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
            open={store.loginError == true}
        >
            <Box sx={style}>
                <header className="dialog-header">
                    <Alert severity="error">{store.errorMessage}</Alert>
                </header>
                <div id="confirm-cancel-container">
                    <Button
                        variant="outlined"
                        size="small"
                        id="dialog-no-button"
                        className="modal-button"
                        onClick={handleCloseModal}
                    >Close</Button>
                </div>
            </Box>
        </Modal>
    );
}