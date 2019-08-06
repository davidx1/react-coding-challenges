---
path: "/c3"
date: "2018-07-21"
title: "Challenge 3 - Art in Context"
tags: ["this", "that"]
excerpt: "A preview of my first post"
---

# Challenge 3 - Art in Context

_Difficulty: 40 david-minutes_

## Learning Objective

- Understand how to create modular components
- Understand how to compose small, reusable components into larger components
- Understand how to use React Context API
- Understand how to use `styled-components`'s theme provider

## Before you start

- Create new project with create react app
- Install styled-component (mandatory)

## Basic requirements

- Create three 50px by 50px components:
  - A square
  - A circle
  - A triangle

> _Hint: CSS for a triangle:_
>
> ```
>      width: 0;
>      height: 0;
>      border-left: 50px solid transparent;
>      border-right: 50px solid transparent;
>      border-top: 100px solid red;
> ```

- Using those basic components, create the following page:
  ![](images/c3/1.png)

## Advanced requirements

- At the root of the project, declare the following constants;

```javascript
const theme1 = {
  c1: "#F5534F",
  c2: "#F3B900",
  c3: "#313A87",
}

const theme2 = {
  c1: "#FFE2DF",
  c2: "#F5C1C7",
  c3: "#E8707B",
}

const MSG = "Hello World"
const USE_DEFAULT_THEME = true
```

- Using Context API, display the MSG string on every square, circle and triangle components
  ![](images/c3/2.png)

* Using the Theme Provider from styled-components, change the color scheme of the shapes from using theme1 to theme2 by changing USE_DEFAULT_THEME to false
  ![](images/c3/3.png)
