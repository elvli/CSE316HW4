import { useContext, useState } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

export default function MUIEditSongModal() {
    const { store } = useContext(GlobalStoreContext);
    const [ title, setTitle ] = useState(store.currentSong.title);
    const [ artist, setArtist ] = useState(store.currentSong.artist);
    const [ youTubeId, setYouTubeId ] = useState(store.currentSong.youTubeId);

    function handleConfirmEditSong() {
        let newSongData = {
            title: title,
            artist: artist,
            youTubeId: youTubeId
        };
        store.addUpdateSongTransaction(store.currentSongIndex, newSongData);        
    }

    function handleCancelEditSong() {
        store.hideModals();
    }

    function handleUpdateTitle(event) {
        setTitle(event.target.value);
    }

    function handleUpdateArtist(event) {
        setArtist(event.target.value);
    }

    function handleUpdateYouTubeId(event) {
        setYouTubeId(event.target.value);
    }

    return (
        <Dialog
            open={store.currentModal === "EDIT_SONG"}
            sx={{color: 'beige' }}
        >
            <DialogTitle><b>Edit Song</b></DialogTitle>
            <DialogContent
                className="dialog-center"
            >
                <TextField
                    id="edit-song-dialog-title-textfield"
                    label="Title:"
                    type="text"
                    fullWidth
                    variant="standard"
                    margin="dense"
                    defaultValue={title}
                    onChange={handleUpdateTitle}
                />
                <TextField
                    id="edit-song-dialog-title-textfield" 
                    className='dialog-textfield' 
                    label="Artist:"
                    type="text" 
                    fullWidth
                    variant='standard'
                    margin='dense'
                    defaultValue={artist} 
                    onChange={handleUpdateArtist} 
                />
                <TextField
                    id="edit-song-dialog-title-textfield" 
                    className='dialog-textfield' 
                    label="YouTube Id:"
                    type="text" 
                    fullWidth
                    variant='standard'
                    margin='dense'
                    defaultValue={youTubeId} 
                    onChange={handleUpdateYouTubeId} 
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleConfirmEditSong}>
                    Confirm
                </Button>
                <Button onClick={handleCancelEditSong}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}