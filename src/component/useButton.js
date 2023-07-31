import React, {Component} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
class UseButton extends Component {
    render() {
        return (
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        );
    }
}

export default UseButton;