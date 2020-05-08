import React, { useState } from "react";
import { useForm } from '../hooks/useForm';

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [ order, setOrder ] = useState([]);
  const [values, handleChanges, clearForm] = useForm('form values', initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
    localStorage.setItem("values", JSON.stringify(values));
    setOrder(values);
    clearForm();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label htmlFor='firstName'>
          First Name:
          <input
            id='firstName'
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor='lastName'>
          Last Name:
          <input
            id='lastName'
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor='address'>
          Address:
          <input
            id='address'
            name="address"
            value={values.address}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor='city'>
          City:
          <input 
            id='city'
            name="city"
            value={values.city}
            onChange={handleChanges} />
        </label>
        <label htmlFor='state'>
          State:
          <input 
            id='state'
            name="state"
            value={values.state}
            onChange={handleChanges} />
        </label>
        <label htmlFor='zip'>
          Zip:
          <input 
          id='zip'
          name="zip"
          value={values.zip}
          onChange={handleChanges} />
        </label>
        <button data-testid='checkout'>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {order.firstName} {order.lastName}
          </p>
          <p>{order.address}</p>
          <p>
            {order.city}, {order.state} {order.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
