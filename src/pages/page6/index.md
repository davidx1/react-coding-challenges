---
path: "/c6"
date: "2018-07-21"
title: "Challenge 6 - Reduce complexity"
tags: ["this", "that"]
excerpt: "Understand what states are in React. Know how to set and modify states based on user interaction. Know how to change the UI based on different states"
---
# Challenge 6 - Reduce complexity
*Difficulty: 60 david-minutes*

## Learning Objective

*   Understand how to maintain state using `useReducer`
*   Understand how to use `jest` to test your application

## Setup

*   Setup new project with Create-React-App
*   Install styled-components (optional)
*   Install validator -- `yarn add validator`
*   Install react-testing-library -- `yarn add -D @testing-library/react`

## Basic Requirements

*   Create a form that looks like this and use `useReducer` from React hooks to handle the states:

![](images/c6/1.png?width=526)

*   The user should be able to enter value into each of the fields
*   When the user clicks the `submit` button, any empty fields should display an error message below that says "Required"

![](images/c6/2.png?width=526)

*   When the user clicks the `submit` button and all the fields have some value filled out then "Form submitted successfully" should appear below the Submit button

![](images/c6/3.png?width=541)

## Advanced Requirements

*   Initially, the form should be empty with no error messages. If the user interacts with any input field by clicking inside it, and clicking out, or tabbing out of that input field, the 'Required' error message should show below it.

![](images/c6/4.gif?width=534)

*   The input fields should also perform the following validations:
    *   The name field only supports letters. ie. no numbers, or spaces, or special characters. If violated, display: "Letters Only"
    *   The name field should have 3 or more characters. If violated, display "Name too short"
    *   The phone number field supports numbers only. if violated, display: "Numbers only"
    *   The phone number field should have more than 7 digits. if violated, display: 'Number too short'
    *   The phone number field should have less than 13 digits. if violated, display: 'Number too long'
    *   The email address field should have a valid email address. if violated, display: 'Invalid email'
*   You could use the `isAlpha`, `isNumeric`, and `isEmail` function from `validator` to check for input validity.
*   When the user enters an invalid value, the error message should only show after the user clicks out of the input field or tabs onto the next field:

![](images/c6/5.gif?width=529)

*   The error message should go away, as soon as the user types in a valid value, or change to a different error message, even before he/she clicks out of the field:

![](images/c6/6.gif?width=522)

*   When the user clicks on the `Submit` button, the success message should only appear if there are no error message of any kind on any of the field.  

## Test Driven Development

*   Here is a set of test that will test most of the functionality for this challenge.
*   You will need to make sure the tags containing your error message have the following test id for the tests to pass:
    *   <Error data-testid="name-error">{error}</Error> 
    *   <Error data-testid="phone-error">{error}</Error>
    *   <Error data-testid="email-error">{error}</Error>
*   The success message on successful submission of the form should also have the data-testid:
    *   <SuccessMsg data-testid="success-message">Form submitted successfully</SuccessMsg>
**App.test.js**

```
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import App from './App';

afterEach(cleanup);

test('input fields values can be changed', () => {
    const { getByLabelText, findByText } = render(<App />);
    const nameInput = getByLabelText('Name');
    const phoneInput = getByLabelText('Phone');
    const emailInput = getByLabelText('Email');

    fireEvent.change(nameInput, { target: { value: 'bob' } });
    expect(nameInput.value).toEqual('bob');

    fireEvent.change(phoneInput, { target: { value: 'bob' } });
    expect(phoneInput.value).toEqual('bob');

    fireEvent.change(emailInput, { target: { value: 'bob' } });
    expect(emailInput.value).toEqual('bob');
});

test('error works properly for name', () => {
    const { getByLabelText, debug, queryByTestId } = render(<App />);
    const nameInput = getByLabelText('Name');

    fireEvent.change(nameInput, { target: { value: '123' } });
    expect(queryByTestId('name-error')).toBeNull();
    fireEvent.blur(nameInput);
    expect(queryByTestId('name-error')).toHaveTextContent('Letters only');
    fireEvent.change(nameInput, { target: { value: 'b' } });
    expect(queryByTestId('name-error')).toHaveTextContent('Name too short');
    fireEvent.change(nameInput, { target: { value: 'bob' } });
    expect(queryByTestId('name-error')).toBeNull();
});

test('error works properly for phone number', () => {
    const { getByLabelText, debug, queryByTestId } = render(<App />);
    const phoneInput = getByLabelText('Phone');

    fireEvent.change(phoneInput, { target: { value: 'bob' } });
    expect(queryByTestId('phone-error')).toBeNull();
    fireEvent.blur(phoneInput);
    expect(queryByTestId('phone-error')).toHaveTextContent('Numbers only');
    fireEvent.change(phoneInput, { target: { value: '1' } });
    expect(queryByTestId('phone-error')).toHaveTextContent('Number too short');
    fireEvent.change(phoneInput, { target: { value: '123456789' } });
    expect(queryByTestId('phone-error')).toBeNull();
});

test('error appears when the user inputs invalid value', () => {
    const { getByLabelText, debug, queryByTestId } = render(<App />);
    const emailInput = getByLabelText('Email');

    fireEvent.change(emailInput, { target: { value: 'bob' } });
    expect(queryByTestId('email-error')).toBeNull();
    fireEvent.blur(emailInput);
    expect(queryByTestId('email-error')).toHaveTextContent('Invalid email');
    fireEvent.change(emailInput, { target: { value: 'bob@bob.com' } });
    expect(queryByTestId('email-error')).toBeNull();
});

test('input fields values cannot be empty', () => {
    const { queryByTestId, getByText } = render(<App />);

    fireEvent.click(getByText('Submit'));
    expect(queryByTestId('name-error')).toHaveTextContent('Required');
    expect(queryByTestId('phone-error')).toHaveTextContent('Required');
    expect(queryByTestId('email-error')).toHaveTextContent('Required');
    expect(queryByTestId('success-message')).toBeNull;
});

test('forms submits properly when there are no error', () => {
    const { getByLabelText, queryByTestId, getByText } = render(<App />);

    const nameInput = getByLabelText('Name');
    const phoneInput = getByLabelText('Phone');
    const emailInput = getByLabelText('Email');

    fireEvent.change(nameInput, { target: { value: 'bob' } });

    fireEvent.change(phoneInput, { target: { value: '123456789' } });

    fireEvent.change(emailInput, { target: { value: 'bob@bob.com' } });

    fireEvent.click(getByText('Submit'));
    expect(queryByTestId('name-error')).toBeNull();
    expect(queryByTestId('phone-error')).toBeNull();
    expect(queryByTestId('email-error')).toBeNull();
    expect(queryByTestId('success-message')).toHaveTextContent('Form submitted successfully');
});
```

