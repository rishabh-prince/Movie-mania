import React from 'react';
import "./Payment.css";

const Payment = () => {
  return (
    <div className='payment'>
      <h2>Proceed to payment</h2>
      <h3>Amount ₹500</h3>
      <form
        method="POST"
        action="https://api.razorpay.com/v1/checkout/embedded"
      >
        <input type="hidden" name="key_id" value="rzp_test_uVitIrMyZzf7gb" />
        <input type="hidden" name="amount" value="100" />
        <input type="hidden" name="order_id" value="order_OgU6hocwqC9oIn" />
        <input type="hidden" name="name" value="Acme Corp" />
        <input type="hidden" name="description" value="A Wild Sheep Chase" />
        <input
          type="hidden"
          name="image"
          value="https://cdn.razorpay.com/logos/BUVwvgaqVByGp2_large.jpg"
        />
        <input type="hidden" name="prefill[name]" value="Gaurav Kumar" />
        <input type="hidden" name="prefill[contact]" value="9123456780" />
        <input
          type="hidden"
          name="prefill[email]"
          value="gaurav.kumar@example.com"
        />
        <input
          type="hidden"
          name="notes[shipping address]"
          value="L-16, The Business Centre, 61 Wellfield Road, New Delhi - 110001"
        />
        <input
          type="hidden"
          name="callback_url"
          value="https://example.com/payment-callback"
        />
        <input
          type="hidden"
          name="cancel_url"
          value="https://example.com/payment-cancel"
        />
        <button className='pay-btn'>Pay</button>
      </form>
    </div>
  );
}

export default Payment;