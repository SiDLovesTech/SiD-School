function Login(form) {
username = new Array("Siddhesh", "Vedant");
password = new Array("Siddhesh", "Vedant");
page = "siddhesh.html";
pagev = "vedant.html";
if (form.username.value == username[0] && form.password.value == password[0] || form.username.value == username[1] && form.password.value == password[1]) {
self.location.href = page;
alert("Welcome Siddhesh")
}
if (form.username.value == username[1] && form.password.value == password[1] || form.username.value == username[1] && form.password.value == password[1]) {
self.location.href = pagev;
alert("Welcome Vedant")
}
if (form.username.value != username[0] && form.password.value != password[0] || form.username.value == username[1] && form.password.value == password[1]) {
alert("Sorry, Your Username or Password may be entered incorrectly.\nPlease try again.");
form.username.focus();
}
if (form.username.value != username[1] && form.password.value != password[1] || form.username.value == username[1] && form.password.value == password[1]) {
alert("Sorry, Your Username or Password may be entered incorrectly.\nPlease try again.");
form.username.focus();
}
return true;
}
