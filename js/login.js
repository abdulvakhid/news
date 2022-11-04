const elLoginForm = document.querySelector(".login-form")
const elEmail = document.querySelector(".login-email")
const elPassword = document.querySelector(".login-password")


async function updateLogin() {
    const loginEmailvalue = elEmail.value;
    const passwordLoginvalue = elPassword.value;

    try {
        const response = await fetch("http://192.168.4.180:5000/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: loginEmailvalue,
                password: passwordLoginvalue
            })

        })
        const data = await response.json();

        if (data.token) {
            window.localStorage.setItem("token-login", data.token);
            window.location.pathname = ("index.html");
        }
    } catch (error) {
        console.log(error);
    }
}


elLoginForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    updateLogin();
})