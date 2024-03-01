function validate() {
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var message = document.getElementById("error");
    message.setAttribute("class", "show");

    if (user == "" && email == "" && pass == "" && confirm == "") {
        message.innerHTML = "Enter Valid Data";
        return false;
    } else if (user.length < 5 || user > 15) {
        message.innerHTML = "Enter Valid Username";
        return false;
    } else if (email.indexOf("@") == -1) {
        message.innerHTML = "Enter Valid Email";
        return false;
    }else if (pass.length<8){
        message.innerHTML = "Enter strong password";
        return false;
    }else if(pass !=confirm){
        message.innerHTML = "Passwords are not the same";
        return false;
    }





}