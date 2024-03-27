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

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
	  
firebase.initializeApp(firebaseConfig);
	  
	  
	  
// Initialize firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = firebase.auth();
const database = firebase.database();



function login()
{
	// Get all our input fields
	email = document.getElementById("email").value;
	passwd = document.getElementById("password").value;
	
	// Validate our input fields
	if (validate_email(email) == false || validate_password(passwd) == false)
	{
		alert("Email or password is not valid. Password length must be at least 6 characters.");
		return; // don't continue running code
	}	
	
	auth.signInWithEmailAndPassword(email, passwd)
	.then(function (){
		
		// Declare user variable
		var user = auth.currentUser;
		
		var database_ref = database.ref();
		
		var user_data = {
			last_login : Date.now()
		}
		
		// Push to Firebase Database
		database_ref.child('users/' + user.uid).update(user_data);
		
		//alert("User logged in.");
		console.log("User login successful.");
		
		// Go go user account page
		window.location.href = "useraccount.html";
		
	})
	.catch(function(error) {
		// Firebase will catch errors
		var error_code = error.code;
		var error_message = error.message;
		
		alert(error_message);		
	})	
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


var login_button = document.getElementById("login_button");
var dont_have_an_account_button = document.getElementById("dont_have_an_account_button");

// LOGIN BUTTON - Hover, Unhover, Click
login_button.addEventListener("mouseover", function ()
{
		login_button.style.filter = "brightness(150%)";
});

login_button.addEventListener("mouseout", function ()
{
		login_button.style.filter = "brightness(100%)";
});
login_button.addEventListener("click", function ()
{
	login();
});


// DONT HAVE ACCOUNT BUTTON - Hover, Unhover, Click
dont_have_an_account_button.addEventListener("mouseover", function ()
{
		dont_have_an_account_button.style.filter = "brightness(150%)";
});

dont_have_an_account_button.addEventListener("mouseout", function ()
{
		dont_have_an_account_button.style.filter = "brightness(100%)";
});
dont_have_an_account_button.addEventListener("click", function ()
{
	window.location.href = "chooseloginaction.html";
});



// LOGO BUTTON
var logo_button = document.getElementById("logo");

logo_button.addEventListener("click", function()
{
	window.location.href = "index.html";
});