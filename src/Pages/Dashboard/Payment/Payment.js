import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useParams } from 'react-router-dom';
import CheackOut from './CheackOut';

const stripePromise = loadStripe('pk_test_51Jw80LHEP40MVzDXdogNkMtEyHemI6jDGjefvm37bSWrpFKzLfezsQWLcy1mIOqNIQBK590UKsms78axmfEwzu3s00yW8Xqrsy');

const Payment = () => {
    const { id } = useParams();
    const [appointments, setAppointments] = React.useState({});
    React.useEffect(() => {
        fetch(`http://localhost:5000/appointments/${id}`)
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [id])
    return (
        <div>
            <h1>Pay For: {appointments.patientName} for <span className='text-dangen'>{appointments.serviceName}</span> </h1>
            <h4>Pay: ${appointments.price}</h4>
            {appointments.price && <Elements stripe={stripePromise}>
                <CheackOut 
                appointments={appointments}

                />
            </Elements>}
        </div>
    );
};

export default Payment;