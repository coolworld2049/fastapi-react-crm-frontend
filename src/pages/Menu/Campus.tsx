import { useCreateSuggestionContext } from 'react-admin';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
} from '@mui/material';
import React from "react";
import {campusesApi} from "../../providers/env";


export const CreateCampusOption = () => {
    const { filter, onCancel, onCreate } = useCreateSuggestionContext();
    const [cipher, setCipher] = React.useState(filter || '');
    const [address, setAddress] = React.useState(filter || '');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const newOption = { cph: cipher, addr: address };
        campusesApi.createCampus({id: newOption.cph, address: newOption.addr}).then(r => {
            setCipher('');
            setAddress('');
            onCreate(newOption);
        })
    };

    return (
        <Dialog open onClose={onCancel}>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <TextField
                        label="Cipher"
                        value={cipher}
                        onChange={event => setCipher(event.target.value)}
                        autoFocus
                    />
                    <TextField
                        label="Address"
                        value={address}
                        onChange={event => setAddress(event.target.value)}
                        autoFocus
                    />
                </DialogContent>
                <DialogActions>
                    <Button type="submit">Save</Button>
                    <Button onClick={onCancel}>Cancel</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};
