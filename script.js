

// var form = document.getElementById('form')

// form.addEventListener('submit',function(event){

//   event.preventDefault()

//   var username=document.getElementById('username').ariaValueMax
//   console.log(username)
// });

// function validate(){
//   var username = document.getElementById("username").value;
//   var phone = document.getElementById("phone").value;
//   var email = document.getElementById("email").value;
//   var message = document.getElementById("message").value;
//   var error_message = document.getElementById("error_message");
  
//   error_message.style.padding = "10px";
  
//   var text;
//   if(username.length <! 5){
//     text = "Please Enter valid Name";
//     error_message.innerHTML = text;
//     return false;
//   }else{
//     alert("Form Submitted Successfully!");
//   }
  
//   if(isNaN(phone) || phone.length != 10){
//     text = "Please Enter valid Phone Number";
//     error_message.innerHTML = text;
//     return false;
//   }
//   if(email.indexOf("@") == -1 || email.length < 6){
//     text = "Please Enter valid Email";
//     error_message.innerHTML = text;
//     return false;
//   }
//   if(message.length <= 140){
//     text = "Please Enter More Than 140 Characters";
//     error_message.innerHTML = text;
//     return false;
//   }
//   alert("Form Submitted Successfully!");
//   return true;
// }


// const form = document.querySelector("form[name='contact-form']");
// const nameInput = document.querySelector("input[name='name']");
// const emailInput = document.querySelector("input[name='email']");
// const phoneInput = document.querySelector("input[name='phone']");
// const messageInput = document.querySelector("textarea[name='message']");

// nameInput.isValid = () => !!nameInput.value;
// emailInput.isValid = () => isValidEmail(emailInput.value);
// phoneInput.isValid = () => isValidPhone(phoneInput.value);
// messageInput.isValid = () => !!messageInput.value;

// const inputFields = [nameInput, emailInput, phoneInput, messageInput];

// const isValidEmail = (email) => {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

// const isValidPhone = (phone) => {
//   const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
//   return re.test(String(phone).toLowerCase());
// };

// let shouldValidate = false;
// let isFormValid = false;

// const validateInputs = () => {
//   console.log("we are here");
//   if (!shouldValidate) return;

//   isFormValid = true;
//   inputFields.forEach((input) => {
//     input.classList.remove("invalid");
//     input.nextElementSibling.classList.add("hide");

//     if (!input.isValid()) {
//       input.classList.add("invalid");
//       isFormValid = false;
//       input.nextElementSibling.classList.remove("hide");
//     }
//   });
// };

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   shouldValidate = true;
//   validateInputs();
//   if (isFormValid) {
//     // TODO: DO AJAX REQUEST
//   }
// });

// inputFields.forEach((input) => input.addEventListener("input", validateInputs));

// const name = document.getElementById('name')
// const email = document.getElementById('email')
// const tel = document.getElementById('tel')
// const form = document.getElementById('form')

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//     const nameValue = name.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();

//     if(nameValue === '') {
//         setError( name, 'Username is required');
//     } else {
//         setSuccess( name);
//     }

//     if(emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//     }

//     if(passwordValue === '') {
//         setError(password, 'Password is required');
//     } else if (passwordValue.length < 8 ) {
//         setError(password, 'Password must be at least 8 character.')
//     } else {
//         setSuccess(password);
//     }

//     if(password2Value === '') {
//         setError(password2, 'Please confirm your password');
//     } else if (password2Value !== passwordValue) {
//         setError(password2, "Passwords doesn't match");
//     } else {
//         setSuccess(password2);
//     }

// };
