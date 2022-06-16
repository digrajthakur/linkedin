function login() {
    var uname = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    if (uname == "Form" && pass == "12345") {
        location.assign("https://www.linkedin.com/in/deepanshu-thakur-985a5a215");
    } else {
        window.alert("login failed");
    }
}