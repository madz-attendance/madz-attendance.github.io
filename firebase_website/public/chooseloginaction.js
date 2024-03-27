

var create_an_account_button = document.getElementById("create_an_account_button");
var log_in_to_an_existing_account = document.getElementById("log_in_to_an_existing_account_button");

var logo_button = document.getElementById("logo");

logo_button.addEventListener("click", function()
{
	window.location.href = "index.html";
});

// CREATE ACCOUNT - HOVER, UNHOVER, CLICK
create_an_account_button.addEventListener("mouseover", function ()
{
		create_an_account_button.style.filter = "brightness(150%)";
});

create_an_account_button.addEventListener("mouseout", function ()
{
		create_an_account_button.style.filter = "brightness(100%)";
});
create_an_account_button.addEventListener("click", function ()
{
	window.location.href = "register.html";
});


// LOG INTO AN ACCOUNT - HOVER, UNHOVER, CLICK
log_in_to_an_existing_account_button.addEventListener("mouseover", function ()
{
		log_in_to_an_existing_account_button.style.filter = "brightness(150%)";
});

log_in_to_an_existing_account_button.addEventListener("mouseout", function ()
{
		log_in_to_an_existing_account_button.style.filter = "brightness(100%)";
});
log_in_to_an_existing_account_button.addEventListener("click", function ()
{
	window.location.href = "login.html";
});





