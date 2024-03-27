// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = 
{
	apiKey: "AIzaSyDt0z6Li5YXqagcPgbOzXzSaUiEbLZ6_qc",
	authDomain: "madz-attendance.firebaseapp.com",
	projectId: "madz-attendance",
	storageBucket: "madz-attendance.appspot.com",
	messagingSenderId: "488541010538",
	appId: "1:488541010538:web:cf16a08c8a4b026a4ca813",
	measurementId: "G-04LKDVYT0L"
};

firebase.initializeApp(firebaseConfig);
	  
	  
	  
// Initialize firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = firebase.auth();
const database = firebase.database();

function register()
{
	email = document.getElementById("email").value;
	passwd = document.getElementById("password").value;
	fname = document.getElementById("first_name").value;
	lname = document.getElementById("last_name").value;
	
	// Validate input fields
	if (validate_email(email) == false || validate_password(passwd) == false)
	{
		alert("Email or password is not valid. Password length must be at least 6 characters.");
		return; // don't continue running code
	}
	
	// Move on with authentification
	auth.createUserWithEmailAndPassword(email, passwd)
	.then(function()
	{
		// User has been created and everything is all good
		var user = auth.currentUser;
		console.log("User created");
		
		// Add this user to Firebase Database
		var database_ref = database.ref(); 
		
		// Create user data. When first registering, set all records to 0.
		var user_data = {
			email : email,
			first_name: fname,
			last_name: lname,
			role: "",
			last_login : Date.now()
		};
		
		database_ref.child('users/' + user.uid).set(user_data);
		
		// After registering an account, take them to the log in page to log in.
		window.location.href = "login.html";
		
	})
	.catch(function(error)
	{
		// Firebase will catch errors
		var error_code = error.code;
		var error_message = error.message;
		
		alert(error_message);
	});
	
	
}











function validate_email(email)
{
	expression = /^[^@]+@\w+(\.\w+)+\w$/
	
	// email is good
	if (expression.test(email) == true)
	{
		return true;
	}
	// email is bad
	else
	{
		return false;
	}
}

function validate_password(passwd)
{
	// Firebase only accepts lengths greater than 6
	if (passwd < 6)
	{
		return false;
	}
	else
	{
		return true;
	}
}

function validate_field(field)
{
	if (field == null)
	{
		return false;
	}
	
	if (field.length <= 0)
	{
		return false;
	}
	else
	{
		return true;
	}
}



var register_button = document.getElementById("register_button");
var already_have_an_account_button = document.getElementById("already_have_an_account_button");

// REGISTER BUTTON - Hover, Unhover, Click
register_button.addEventListener("mouseover", function ()
{
		register_button.style.filter = "brightness(150%)";
});

register_button.addEventListener("mouseout", function ()
{
		register_button.style.filter = "brightness(100%)";
});
register_button.addEventListener("click", function ()
{
	register();
});


// ALREADY HAVE ACCOUNT BUTTON - Hover, Unhover, Click
already_have_an_account_button.addEventListener("mouseover", function ()
{
		already_have_an_account_button.style.filter = "brightness(150%)";
});

already_have_an_account_button.addEventListener("mouseout", function ()
{
		already_have_an_account_button.style.filter = "brightness(100%)";
});
already_have_an_account_button.addEventListener("click", function ()
{
	window.location.href = "chooseloginaction.html";
});



// LOGO
var logo_button = document.getElementById("logo");

logo_button.addEventListener("click", function()
{
	window.location.href = "index.html";
});
