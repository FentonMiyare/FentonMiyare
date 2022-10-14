// CONTACT
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
      //USER INPUT ELEMENTS
      //INPUT FIELDS
      this.fields = {
        userName: document.getElementById("userName"),
        userEmail: document.getElementById("userEmail"),
        userMessage: document.getElementById("userMessage")
      };
    
      this.submitBtn = document.getElementById("submitBtn");
    },
    
    bindEvents: function() {
      var i;
      //RUN RULES ON SUBMIT BUTTON CLICK
      this.submitBtn.onclick = this.runRules.bind(this);
      //BIND EVENTS TO EACH INPUT FIELD
      for (i in this.fields) {
        if (this.fields.hasOwnProperty(i)) {
          //VARIABLES
          input = this.fields[i];
          container = input.parentElement;
          //RUN RULES WHEN INPUT HAS FOCUS
          input.onfocus = this.runRules.bind(this);
          //RESET ERRORS WHEN CONTAINER IS CLICKED
          container.onclick = this.resetErrors.bind(this, input);
        }
      }
    },
    
    runRules: function(evnt) {
      var target = evnt.target,
      type = evnt.type;
      //IF EVENT ON SUBMIT BUTTON
      if (target === this.submitBtn) {
        //PREVENT FORM SUBMITTION
        this.preventDefault(evnt);
        //IF INPUT HAS FOCUS
      } else if (type === "focus") {
        //RESET CLASSLIST
        this.resetClassList(target.parentElement);
        //RESET ERRORS
        this.resetErrors(target);
        return false;
      }
     
      //RESET CLASSLIST
      this.resetClassList();
      //CHECK FIELDS
      this.checkFields();
    },
          
    preventDefault: function(evnt) {
      //PREVENT DEFUALT
      evnt.preventDefault();
    },
    
    checkFields: function() {
      var i,
      validCount = 0,
      //EMAIL FILTER 
      filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      //CYLCE THROUGH INPUTS
      for (i in this.fields) {
        if (this.fields.hasOwnProperty(i)) {
          input = this.fields[i];
          //CHECK IF FIELD IS EMPTY
          if (input.value === "") {
            //ADD ERROR CLASS
            this.addClass(input, classError);
            //CHECK IF EMAIL IS VALID
          } else if (i === "userEmail" && !filter.test(input.value)) {
            //ADD ERROR CLASS
            this.addClass(input, classError);
          } else {
            //FIELD IS VALID
            this.addClass(input, classSuccess);
            validCount += 1;
          }
        }
      }
      
      //IF ALL FEILDS ARE VALID
      if (validCount === 3) {
        //SUBMIT FORM
        this.submitForm();
      }
    },
    
    addClass: function(input, clss) {
      container = input.parentElement;
      //IF INPUT HAS ERROR
      if (clss === classError) {
        //SHOW ERROR MESSAGE
        this.errorMessage(input);
      }
      
      //ADD CLASS
      input.parentElement.classList.add(clss);
    },
          
    errorMessage: function(input) {
      var message;
      //IF USERNAME HAS ERROR
      if (input === this.fields.userName) {
        message = "Please enter your name";
        //ELSE IF USEREMAIL HAS ERROR 
      } else if (input === this.fields.userEmail) {
        message = "Please enter a valid email";
        //ELSE IF USERMESSAGE HAS ERROR
      } else if (input === this.fields.userMessage) {
        message = "Please enter your feedback";
      }
      this.renderError(input, message);
    },
         
    renderError: function(input, message) {
      var html;
      //GET INPUT CONTAINER
      container = input.parentElement;
      //RENDER HTML
      html = document.createElement("div");
      html.setAttribute("class", "message");
      html.innerHTML = message;
      //IF MESSAGE ELEMENT DOESN'T EXIST
      if (!container.getElementsByClassName("message")[0]) {
        //INSERT MESSAGE TO INPUT CONTAINER
        container.insertBefore(html, container.firstElementChild);
      }
    },
    
    resetClassList: function(input) {
      var i;
      //IF TARGETING SPECIFIC INPUT
      if (input) {
        //GET INPUT CONTAINER
        container = input.parentElement;
        //REMOVE CLASSES
        container.classList.remove(classError, classSuccess);
        //FOCUS ON INPUT FIELD
        input.focus();
      } else {
        for (i in this.fields) {
          if (this.fields.hasOwnProperty(i)) {
            //REMOVE CLASSES FROM ALL FIELDS
            this.fields[i].parentElement.classList.remove(classError, classSuccess);
          }
        }
      }
    },
          
    resetErrors: function(input) {
      //GET INPUT CONTAINER
      container = input.parentElement;
      //IF CONTAINER CONTAINS ERROR
      if (container.classList.contains(classError)) {
        //RESET CLASSES
        this.resetClassList(input);
      }
    },
    
    submitForm: function() {
      var waitForAnimation;
      //ADD SUCCESS CLASS
      this.contactForm.classList.add(classSuccess);
      //WAIT FOR ANIMATION TO FINISH
      this.sendData();
      this.changeHeader("Sent Succesfully");
      
      //WAIT FOR ANIMATION TO FINISH
      setTimeout(this.changeHeader.bind(this, "Thank you for your feedback"), 1500);
    },
    
    sendData: function() {
      let form = document.forms["contactForm"];
      // const url = "/submit-form";
      const url = "https://formsubmit.co/ajax/cb65b038b98ceaf20b7495a477d7b9ae";
      const XHR = new XMLHttpRequest();
      const myFormData = new FormData(form);
      
      // { name, email, subject, feedback }
      const data = Object.fromEntries(myFormData.entries());
    
      XHR.onreadystatechange = function() {
        if (XHR.readyState === 1 || XHR.readyState === 2 || XHR.readyState === 3) {
          console.log("Sending in progress...");
        }
    
        if (XHR.readyState === 4 && XHR.status === 200) {
          console.log("Message sent!");
        }
        else if (XHR.readyState === 4 && XHR.status === 404) {
          console.log("Fill out the form correctly!");
        }
        else if (XHR.readyState === 4 && XHR.status !== 200 || XHR.readyState === 4 && XHR.status !== 404) {
          console.log("An error has occurred!");
          console.log(XHR.response.message)
        }
      };
    
      XHR.open("POST", url, true);
      XHR.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
      XHR.send(myFormData);
      console.log(data)
    },
    
    changeHeader: function(text) {
      //CHANGE HEADER TEXT
      this.formHeader.textContent = text;
      this.formParagraph.innerHTML = '';
    },
  };
  
  //INITIATE FORM VALIDATOR
  formValidator.init();
} ());

/*
const form = document.forms.contactForm

form.addEventListener("submit", function(event) {
  event.preventDefault();
  sendData();
});

function sendData() {
  //form = document.forms.contactForm
  //form = container.parentElement;
  const url = "https://formsubmit.co/ajax/your@email.com";
  const data = Object.fromEntries(myFormData.entries());
    
  fetch(url, {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/