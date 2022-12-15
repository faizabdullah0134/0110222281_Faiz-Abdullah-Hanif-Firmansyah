function kirim() {
    let inputNama = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;
    let form = document.getElementById("form");

    if (inputNama == "faiz0134" && inputPassword == "gasterus") {
        form.setAttribute("action", "login-sukses.html");
        window.alert("Login Berhasil");
    }

    else {
        window.alert("Login Gagal");
    }
}