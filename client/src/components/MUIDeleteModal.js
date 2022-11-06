import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export default function MUIDeleteModal() {
    const { store } = useContext(GlobalStoreContext);
    let name = "";
    if (store.listMarkedForDeletion) {
        name = store.listMarkedForDeletion.name;
    }
    function handleDeleteList(event) {
        event.stopPropagation();
        store.deleteMarkedList();
    }
    function handleCloseModal(event) {
        event.stopPropagation();
        store.unmarkListForDeletion();
    }

    return (
        <Dialog
            open={store.listMarkedForDeletion !== null}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Remove List?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Delete the {name} Top 5 List?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDeleteList}>
                    Confirm
                </Button>
                <Button onClick={handleCloseModal}>
                    Cancel
                </Button>
            </DialogActions>
      </Dialog>
    );
}