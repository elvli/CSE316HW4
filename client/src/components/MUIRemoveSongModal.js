import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export default function MUIRemoveSongModal() {
    const { store } = useContext(GlobalStoreContext);

    function handleConfirmRemoveSong () {
        store.addRemoveSongTransaction();
    }

    function handleCancelRemoveSong () {
        store.hideModals();
    }
    
    let modalClass = "modal";
    if (store.isRemoveSongModalOpen()) {
        modalClass += " is-visible";
    }

    let songTitle = "";
    if (store.currentSong) {
        songTitle = store.currentSong.title;
    }

    return (
        <Dialog
            open={store.currentModal === "REMOVE_SONG"}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Remove song?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you wish to remove {songTitle} from the playlist?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleConfirmRemoveSong}>
                    Confirm
                </Button>
                <Button onClick={handleCancelRemoveSong}>
                    Cancel
                </Button>
            </DialogActions>
      </Dialog>
    );
}