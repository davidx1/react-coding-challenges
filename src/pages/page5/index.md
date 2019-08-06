---
path: "/c5"
date: "2018-07-21"
title: "Challenge 5 - Get with axios"
tags: ["this", "that"]
excerpt: "Understand what states are in React. Know how to set and modify states based on user interaction. Know how to change the UI based on different states"
---

# Challenge 5 - Get with axios
*Difficulty: 30 david-minutes*

## Learning Objective

*   Understand how to use axios to make API calls
*   Understand how to display different `Loading` messages
*   Understand how to handle error when API call fails

## Setup

*   Setup new project with Create-React-App
*   Install styled-components (optional)
*   Install react-json-view (optional)
*   Install axios (mandatory)

## Basic Requirements

*   Make a GET API call to `https://reqres.in/api/users`
*   The response will look something like this:

**API response**

```
{
  "page": 1,
  "per_page": 3,
  "total": 12,
  "total_pages": 4,
  "data": [
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https:\/\/s3.amazonaws.com\/uifaces\/faces\/twitter\/calebogden\/128.jpg"
    },
    {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https:\/\/s3.amazonaws.com\/uifaces\/faces\/twitter\/josephstein\/128.jpg"
    },
    {
      "id": 3,
      "email": "emma.wong@reqres.in",
      "first_name": "Emma",
      "last_name": "Wong",
      "avatar": "https:\/\/s3.amazonaws.com\/uifaces\/faces\/twitter\/olegpogodaev\/128.jpg"
    }
  ]
}
```

*   You can request individual pages by passing in a query parameter `page`. eg: `https://reqres.in/api/users?page=3`
*   Display the response on the page in Json format like so:

![](images/c5/1.png?width=950)

## Advanced Requirements

*   When the page load for the first time, we should let the user know with a full page loading message:

![](images/c5/2.png?width=237)

*   After the page loads, we should see the following UI:

![](images/c5/3.png?width=401)

*   When the user clicks on `next` Another API should be made to go to the next page.
*   If we are on the first page, the `Previouse` button should be disabled
*   If we are on the last page, the `Next` button should be disabled
*   while switching between pages, a small `Loading...` Text should appear above the pagination

![](images/c5/4.png?width=313)

*   If Any of the API call fails at any point, we should display a full screen error message:

![](images/c5/5.png?width=132)

> Hint: You can emulate error message and see the loading states more clearly by disabling cache and throttling your internet speed via browser configuration.