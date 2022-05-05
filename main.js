'use strict';

const verifyValidation = function() {

  const name = document.getElementById('user').value;
  const pw = document.getElementById("pswd").value;

  //check empty username field
  if (name === '') {
    document.getElementById("name").innerHTML = 
      '**Fill the username please!';
    return false;
  }

  //minimum username length validation
  if (name.length < 3) {
    document.getElementById('name').innerHTML = 
      '**Username length must be atleast 3 characters';
    return false;
  }

  //maximum username length validation
  if (name.length > 20) {
    document.getElementById('name').innerHTML = 
      '**Username length must not exceed 20 characters';
    return false;
  }
    

  //************ */


  //check empty password field
    if (pw == "") {
    document.getElementById('message').innerHTML = 
      '**Fill the password please!';
    return false;
  }

  //minimum password length validation
  if (pw.length < 8) {
    document.getElementById('message').innerHTML = 
      '**Password length must be atleast 8 characters';
    return false;
  }

  //maximum length of password validation
  if (pw.length > 16) {
    document.getElementById('message').innerHTML =
      '**Password length must not exceed 16 characters';
    return false;
  }
  
  //numer validation
  const re2 = /\d/g;
  if (!re2.test(pw)) {
    document.getElementById('message').innerHTML =
      '**Password should contain at least one digit';
    return false;
  }

  // Lowercase validation
  const re3 = /^(?=.*[a-z]).*$/;
  if (!re3.test(pw)) {
    document.getElementById('message').innerHTML =
      '**Password should contain at least one lower case';
    return false;
  }

  //Uppercase validation
  const re4 = /^(?=.*[A-Z]).*$/;
  if (!re4.test(pw)) {
    document.getElementById('message').innerHTML =
      '**Password should contain at least one upper case';
    return false;
  }

  // Special symbol validation
  const re5 = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
  if (!re5.test(pw)) {
    document.getElementById('message').innerHTML =
      '**Password should contain at least one Special symbol';
    return false;
  }

  //Special word validaton
  if (pw === document.getElementById('user').value) {
    document.getElementById('message').innerHTML =
      '**Password should not be the usename';
    return false;
  }


  // Language validation
  const re7 = /[^a-zA-Zа-яА-Я\u0561-\u0587\u0531-\u0556-]+/g;
  if (!re7.test(pw)) {
    document.getElementById("message").innerHTML =
      '**Password should not be Latin, Armenian or Russion';
    return false;
  } else {
     return true;
  }
}
 