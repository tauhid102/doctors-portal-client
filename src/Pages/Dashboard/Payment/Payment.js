import React from 'react';
import { useParams } from 'react-router';

const Payment = () => {
    const { appointmentId } = useParams();
    return (
        <div>
            <h1>Pay For: {appointmentId}</h1>
        </div>
    );
};

export default Payment;