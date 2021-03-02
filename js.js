function validate() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmpassword").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;
  if (name.length < 5) {
    text = "Please Enter valid Username";
    error_message.innerHTML = text;
    return false;
  }

  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }

  if (password == null || password == ""){
    text = "Please Enter Password";
    error_message.innerHTML = text;
    return false;
  } else if(password != confirmPassword) {
    text = "Please Enter Same Password";
    error_message.innerHTML = text;
    return false;
  }

  alert("Form Submitted Successfully!");
  return true;
}
// Login Forma

function validatee() {
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;
  if (name.length < 5) {
    text = "Please Enter valid Username";
    error_message.innerHTML = text;
    return false;
  }

  if (password == null || password == "") {
    text = "Please Enter Password";
    error_message.innerHTML = text;
    return false;
  }

  alert("You are loggen in!");
  return true;
};