import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState,useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
const CheackOut = ({appointments}) => {
    const {price,patientName}=appointments;
    const stripe = useStripe();
    const elements = useElements();
    const {user}=useAuth();

    const [error,setError]=useState('');
    const [clientSecret,setClientSecret]=useState();
    const [success,setSuccess]=useState('');
    const [process,setProcess]=useState(false);

    useEffect(()=>{
        fetch('http://localhost:5000/create-payment-intent',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({price})
        })
        .then(res=>res.json())
        .then(data=>setClientSecret(data.clientSecret))
    },[price])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);

        if(card===null){
            return;
        }
        setProcess(true);
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          if(error){
              setError(error.message);
              setSuccess('');
          }
          else{
            setError('');
              console.log(paymentMethod);
          }
          //payments intent
          const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email:user.email
                },
              },
            },
          );
          if(intentError){
              setError(intentError.message);
              setSuccess('');
          }
          else{
              setError('');
              console.log(paymentIntent);
              setSuccess('Your Payment Procced Successfully');
              setProcess(false);
          }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {process ? <CircularProgress></CircularProgress> :<button type="submit" disabled={!stripe}>
                    Pay ${price}
                </button>}
            </form>
            {
                error && <p style={{color:'red'}}>{error}</p>
            }
            {
                success && <p style={{color:'green'}}>{success}</p>
            }
        </div>
    );
};

export default CheackOut;