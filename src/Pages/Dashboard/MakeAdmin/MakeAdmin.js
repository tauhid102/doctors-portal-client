import { Alert, AlertTitle, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true);
                }

            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField id="standard-basic"
                    style={{ width: '50%' }}
                    label="email"
                    type='email'
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type='submit' varient='contained'>Make Admin</Button>
                {
                    success && <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        Admin Create Successfully <strong>Congrass</strong>
                    </Alert>
                }
            </form>
        </div>
    );
};

export default MakeAdmin;