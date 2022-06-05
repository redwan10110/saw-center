import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L47kVC4QVTYu7DY1UCPnLCpnv7Xg1B25wTJ5E3IYvV9W3YWknv5MpbrurMW8xRhlbSYYXhQ9XfGI9FgjMgMHaXK00R29jXPWt');

const Payment = () => {
    const { id } = useParams();
    // const [order, setOrder] = useState({});
    // const [loading, setLoading] = useState(true);
    // console.log(id);


    // const { data: order, isLoading } = useQuery(['orderById', id], () => fetch(url).then(res => res.json()));
    const url = `https://saw-center.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['orderBooking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    // useEffect(()=>{
    //     fetch(`https://saw-center.herokuapp.com/order/${id}`)
    //     .then(res => {
    //         console.log(res);
    //         return res.json();
    //     })
    //     .then(data => {
    //         setOrder(data);
    //         setLoading(false);
    //     });
    // },[])
    // console.log(order);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {order?.customerName}</p>
                    <h2 className="card-title">Please Pay for {order?.orderName}</h2>
                    <p>Please pay: ${order?.totalPrice}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;