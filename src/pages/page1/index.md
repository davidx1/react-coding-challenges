---
path: "/c1"
date: "2018-07-21"
title: "Challenge 1 - Count the state"
tags: ["this", "that"]
excerpt: "Understand what states are in React. Know how to set and modify states based on user interaction. Know how to change the UI based on different states"
---

# Challenge 1 - Count the state

_Difficulty: 10 david-minutes_

## Learning Objective

- Understand what states are in React
- Know how to set and modify states based on user interaction
- Know how to change the UI based on different states

## Setup

- Setup new project with Create-React-App
- Install styled-components (optional)

## Basic Requirements

![](images/c1/simple.png?width=90)

- Create an UI as shown in the image above
- Clicking on '+' increments the number
- Clicking on '-' decrements the number

## Advanced Requirements

![](images/c1/complex.png?width=210)

- Disable the '-' sign when the count reaches 0 (the counter cannot go below 0)
- Disable both '+' and '-' sign when the count reaches 10
- Display 'YOU WIN' above the count when the count reaches 10
- Display 'reset' button when the user reaches 10
- Clicking on 'reset' will set the count to 0, hide the 'YOU WIN' message, hide the 'reset' button and re-enable the '+' and '-' button
- Split the different components into separate files
