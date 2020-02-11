import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_0oMFAxXjoaWYPNCAWh78t4Yo00hIG2wu2O';

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    };

    return (
        <StripeCheckout
            label="Pay now"
            name="CRWN Clothing"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`$Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;