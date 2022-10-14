# My portfolio project

Hi, i'm Fenton Miyare and this is my flagship [Portfolio Project] where I showcase some of my skills to potential clients. I have endeavored to build realistic projects for this purpose.

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)

## Overview

As a developer, I believe that the power of a website project idea begins with a deeper understanding of the underling web development technologies and a meaningful grasp of the world wide web. All this plus a remarkable passion for executing various concepts to perfection.

### The challenge

In this project, users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

## My process

- Clarify the objectives
- Capture and research concepts and ideas
- Select the best designs using defined differentiators that align, maximize, and balance
- Validate portfolio feasibility and initiate projects
- Manage and monitor the portfolio on a regular basis.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Vanilla JavaScript
- Node JS/Express
- Templating Engines
- Form Endpoints [formsubmit.co]
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Window.history]: read-only property that returns a reference to the History object, which provides an interface for manipulating the browser session history

### What I learned

Some of the wonderful code snippets that were handy for my form creating hacks, see below:

```js
(function() {
  "use strict";
  var //GLOBAL VARIABLES
  input,
  container,
  //CSS CLASSES
  classSuccess = "success",
  classError = "error",
  //FORM VALIDATOR
  formValidator = {
    init: function() {
      this.cacheDom();
      this.bindEvents();
    },

    cacheDom: function() {
      //MAIN PARENT ELEMENT
      this.contactForm = document.getElementById("contactForm");
      //MAIN FORM ELEMENTS
      this.formHeader = document.querySelector("#formHeader h1");
      this.formParagraph = document.querySelector("#formHeader div");
      this.formBody = document.getElementById("formBody");
      this.inputContainer = document.getElementsByClassName("inputContainer");
      this.form = document.forms["contactForm"];

.....
```

### Continued development

I'm continually venturing in to JavaScript frameworks and libraries that would help me fast track my devevelopment process of client side rendering. I'm particularly concentrating on react js and vue. I'm planning on learning everything pertaining to server side rendering, SPAs and multiple page applications. Also routing, CRUD operations, database handling and web security/cybersecurity.

### Useful resources

- [Resource 1](https://developer.mozilla.org/en-US/docs/Web/API/Window/history) - This helped me for navigation purposes between different links in the navbar. I majorly appreciate the use of window.history JavaScript object for the client side rendering of content. I intend to use it going forward especially on small scale projects.
- [Resource 2](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This is an amazing page which helped me finally understand page layouts. Visit the site to learn more on css grid and flexbox. I'd recommend it to anyone still learning the layout concept.

- [Resource 3](https://formsubmit.co/) - A wonderful site for connecting form endpoints for form submissions. No PHP, Javascript/Node or any backend code required.

## Author

- Website - [Fenton Miyare](https://www.fentonmiyare.com)
- Github - [@FentonMiyare](https://github.com/FentonMiyare/FentonMiyare)
- Twitter - [@fentonmiyare](https://www.twitter.com/fentonmiyare)
