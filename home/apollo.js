document.querySelector(".profile").addEventListener("click", function() {
    document.querySelector(".logincontainer").style.display = "flex";
})
document.querySelector(".next").addEventListener("click", function() {
    document.querySelector(".logincontainer").style.display = "none";
    document.querySelector(".otpcontainer").style.display = "flex";


})
document.querySelector(".next2").addEventListener("click", function() {
    var password = document.querySelector(".otpinput").value;
    if (password == "1234") {
        alert("login successfull")
        document.querySelector(".otpcontainer").style.display = "none";
        window.location.href
    } else {
        alert("entered wrong otp try again")
    }
})
document.querySelector("#Resend").addEventListener("click", function() {

    alert("otp Resended again");
    document.querySelector(".otpcontainer").style.display = "flex";

})
document.querySelector(".close2").addEventListener("click", function() {
    document.querySelector(".otpcontainer").style.display = "none";
})


document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".logincontainer").style.display = "none";
})