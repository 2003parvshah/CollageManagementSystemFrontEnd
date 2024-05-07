import React from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  ElementsConsumer,
} from '@stripe/react-stripe-js';

class CheckoutForm extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const {stripe, elements} = this.props;

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      // Show error to your customer
      return;
    }

    // Create the PaymentIntent and obtain clientSecret
    const res = await fetch('/create-intent', {
      method: 'POST',
    });
    const {client_secret: clientSecret}  = "sk_test_51OqaRISGQ0fNvCbySHjbZodGBezZZ0e1xRWUEXiK01Xoak785R6jtq41enJUaaKpjYRAKEtNJTTdL1uSF4YLxzms00SjjpBSRL"
    // const {client_secret: clientSecret} = await res.json();
    // const clientSecret='sk_test_51OqaRISGQ0fNvCbySHjbZodGBezZZ0e1xRWUEXiK01Xoak785R6jtq41enJUaaKpjYRAKEtNJTTdL1uSF4YLxzms00SjjpBSRL'
    const {error} = await stripe.confirmPayment({
      //Elements instance that was used to create the Payment Element
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'https://localhost:3000/',
        

      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
    } else {
      // Your customer will be redirected to your return_url. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the return_url.
    }
  };

  render() {
    const {stripe} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <PaymentElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
  }
}

const InjectedCheckoutForm = () => (
  <ElementsConsumer>
    {({stripe, elements}) => (
      <CheckoutForm stripe={stripe} elements={elements} />
    )}
  </ElementsConsumer>
);
export default InjectedCheckoutForm;