function Login(form) {
username = new Array("Siddhesh", "Vedant");
password = new Array("Siddhesh", "Vedant");
page = "siddhesh.html";
pagev = "vedant.html";
if (form.username.value == username[0] && form.password.value == password[0] || form.username.value == username[1] && form.password.value == password[1]) {
self.location.href = page;
}
if (form.username.value == username[1] && form.password.value == password[1] || form.username.value == username[1] && form.password.value == password[1]) {
self.location.href = pagev;
}
else if (form.username.value != username[0] && form.password.value != password[0] || form.username.value == username[1] && form.password.value == password[1]) {
}
else if (form.username.value != username[1] && form.password.value != password[1] || form.username.value == username[1] && form.password.value == password[1]) {
}
return true;
}
