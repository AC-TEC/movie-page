//index.html logic for username and password in this file 
document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.querySelector(".submit_button");

    submitButton.addEventListener("click", () => {
        const username = document.querySelector(".username_input").value;
        const password = document.querySelector(".password").value;

        //Check login info
        //if correct then brings you to next page else incorrect info prompt
        if (username === "Antony" && password === "pineapple") {
            //moves you to next screen  (second_screen.html file)
            window.location.href = "second_screen.html";
        } else {
            alert("Incorrect username or password!");
        }
    });

});
