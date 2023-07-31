import React, {Component} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
class UseBasicPagination extends Component {
    render() {
        return (
            <Stack spacing={2}>
                <Pagination count={10} />
                <Pagination count={10} color="primary" />
                <Pagination count={10} color="secondary" />
                <Pagination count={10} disabled />
            </Stack>
        );
    }
}

export default UseBasicPagination;