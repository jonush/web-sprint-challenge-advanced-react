import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);
  expect(getByText(/Checkout Form/i)).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  const { getByText, getByLabelText, getByTestId } = render(<CheckoutForm />);

  fireEvent.change(getByLabelText(/First Name:/i), {target: {value:'Jon'}});
  fireEvent.change(getByLabelText(/Last Name:/i), {target: {value: 'Hsu'}});
  fireEvent.change(getByLabelText(/Address:/i), {target: {value: '12345 Hello Street'}});
  fireEvent.change(getByLabelText(/City:/i), {target: {value: 'Los Angeles'}});
  fireEvent.change(getByLabelText(/State:/i), {target: {value: 'CA'}});
  fireEvent.change(getByLabelText(/Zip:/i), {target: {value: '95745'}});
  fireEvent.click(getByTestId(/Checkout/i));

  expect(getByTestId(/successMessage/i)).toBeInTheDocument();
  expect(getByText(/jon/i)).toBeInTheDocument();
  expect(getByText(/ca/i)).toBeInTheDocument();
});
