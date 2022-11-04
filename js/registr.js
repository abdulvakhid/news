const elForm = document.querySelector(".form");
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const numberInput = document.querySelector(".numberinput");
const passwordInput = document.querySelector(".pasword-input");

async function update() {

    const userNamevalue = nameInput.value.trim();
    const emailvalue = emailInput.value.trim();
    const numbervalue = numberInput.value;
    const passwordvalue = passwordInput.value;

    try {
        const response = await fetch("http://192.168.4.180:5000/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_name: userNamevalue,
                email: emailvalue,
                phone: numbervalue,
                password: passwordvalue
            })
        })
        const data = await response.json();

        if (data.token) {
            window.localStorage.setItem("token-registr", data.token);
            window.location.pathname = ("index.html")
        }

    } catch (err) {
        console.log(err);
    }
}



elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    update();
})