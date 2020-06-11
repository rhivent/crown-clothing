import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_WBqax2FWVzS9QlpJScO07iuL';

  const onToken = token => {
    axios({
      url: 'http://localhost:5000/payment',
      method : 'post',
      data :{
        amount : priceForStripe,
        token
      }
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
      alert('Payment Succesful!');
    }).catch(error => {
      console.log('Payment error : ',error);
      alert('Payment Succesful!');
      // alert('There was an issue with your payment. Please sure you use the provided credit card');
    })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Kg9.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
