---
path: "/c4"
date: "2018-07-21"
title: "Challenge 4 - Control the form"
tags: ["this", "that"]
excerpt: ""
---

# Challenge 4 - Control the form
_Difficulty: 50 david-minutes_

## Learning Objective

*   Understand how to work with controlled components and input elements.
*   Understand how to maintain different states on different levels of the application component tree.
*   Understand how to use props together with states; specifically, how to initialize component states with props.

## Before you start

*   Create new project with create react app
*   Install styled-component (Optional) 
    `yarn add styled-components`


## Basic requirements

*   Create a **Profile** component for displaying a single contact consisting of a greeting and three **Detail** component:

![](images/c4/1.png?height=250)

*   Create a `constant.js` file.
*   Inside the constant.js, store a variable:  
```
const initContacts = \[{name:'bob', email:'bob@bob.com', age:100}\];
```
*   Import `initContacts` from `constant.js` to initialize your application state.
*   The user is free to change the value in the each of the three **Detail** fields.
*   When the name value changes, the greeting text at the top of the page should change with it.
*   The value of each **Detail **component should be stored inside the state.
*   When the 'Save' button is clicked, the browser should [alert](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) the value of the three details.
*   After editing, if the user clicks 'Cancel', all three details should reset to their initial value.

## Intermediate requirements

*   When the page first loads, instead of input fields, the **Detail** component should be displayed in plain text  
 ![](images/c4/2.png)
*   When the user clicks on 'Edit' next to any of the **Detail**, the plain text should change into an input field and let the user edit that particular field.  
 ![](images/c4/3.png?width=369)
*   When the user clicks \`Done\`, that one field should turn back into plain text

## Advanced requirements

*   Replace `initContacts` array with
```
const initContacts = [
  {name:'abby', email:'abby@abby.com', age:12},
  {name:'ben', email:'ben@ben.com', age:23},
  {name:'catherine', email:'catherine@catherine.com', age:23},
  {name:'daniel', email:'daniel@daniel.com', age:34},
  {name:'eliza', email:'eliza@eliza.com', age:45},
  {name:'flinche', email:'flinche@flinche.com', age:56},
]
```

*   Display a contact selection panel panel on the left hand showing the list of contacts  
 ![](images/c4/4.png?width=442)
*   Clicking on a contact will display their info in the **Profile** component
*   The user may proceed to edit the profile
*   If a user changes any of the three details, then a message should display at the bottom of the page  
 ![](images/c4/5.png?width=466)
*   If the user changes the three details back to the initial value then the message will disappear.
*   If the user navigates away to another contact, then the changes will not be saved and the initial value will display.
*   If the user clicks Save, all three value should be saved so that even if they navigate away and come back, the values will be preserved.
*   If the user changed the `name` Detail, and saved the change, then the name displayed in the left hand contact list should also change.