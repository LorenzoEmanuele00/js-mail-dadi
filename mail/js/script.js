mailList = ["loretto@gmail.com", "brodo24@gmail.com", "mele56@gmail.com"];

let flag = false;

document.getElementById("send").addEventListener("click", function(event) {
    event.preventDefault();

    let email = document.getElementById("mail")
    email = email.value;
    console.log(email);

    for (let i = 0; i < mailList.length; i++) {
        if (mailList [i] === email) {
            flag = true;
        }
    }

    if (flag) {
        document.querySelector("h2").innerHTML = `La mail ${email} ha il permesso per accedere`;
        document.querySelector("h2").classList.remove("red")
        document.querySelector("h2").classList.add("green")
    } else {
        document.querySelector("h2").innerHTML = `La mail ${email} non ha il permesso per accedere`;
        document.querySelector("h2").classList.remove("green")
        document.querySelector("h2").classList.add("red")
    }

});




