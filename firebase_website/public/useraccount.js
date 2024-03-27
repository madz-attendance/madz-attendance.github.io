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


var account_text = document.getElementById("account_text");


var logout_button = document.getElementById("logout_button");
var logo_button = document.getElementById("logo");
var my_classes_button = document.getElementById("my_classes_button");

logo_button.addEventListener("click", function()
{
	window.location.href = "index.html";
});

// LOGOUT BUTTON - Hover, Unhover, Click
logout_button.addEventListener("mouseover", function ()
{
		logout_button.style.filter = "brightness(150%)";
});

logout_button.addEventListener("mouseout", function ()
{
		logout_button.style.filter = "brightness(100%)";
});
logout_button.addEventListener("click", function ()
{
	logout();
});


// Function to log out the user
function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("User logged out successfully.");
        // Redirect the user to the logout page or any other page as needed
        window.location.href = "logout.html";
    }).catch(function(error) {
        // An error happened.
        console.error("Error occurred during logout:", error);
    });
}



// ============================================
// MY CLASSES BUTTON
my_classes_button.addEventListener("click", function()
{
	window.location.href = "index.html";
});

// LOGOUT BUTTON - Hover, Unhover, Click
my_classes_button.addEventListener("mouseover", function ()
{
		my_classes_button.style.filter = "brightness(150%)";
});

my_classes_button.addEventListener("mouseout", function ()
{
		my_classes_button.style.filter = "brightness(100%)";
});
my_classes_button.addEventListener("click", function ()
{
	window.location.href = "myclasses.html";
});








/////////

// ACCESS USER DATA FROM DATABASE (IF THEY ARE LOGGED IN):
// Assuming `user` is the authenticated user object provided by Firebase Authentication

// Listen for authentication state changes
firebase.auth().onAuthStateChanged(function(user)
{
	if (user) 
	{
		// User is signed in.
		var database = firebase.database();
		var userUID = user.uid;
		var userRef = database.ref('users/' + userUID);

		// Retrieve user-specific data - USERNAME
		userRef.once('value', function(snapshot) 
		{
			var userData = snapshot.val();
			if (userData) 
			{
				console.log("User is found");
				var userFirstname = userData.first_name;
				//console.log("User's username: " + userUsername);
				account_text.innerHTML = userFirstname + "'s Account"; // Fixed the line to set innerHTML
			} 
			else
			{ console.log("User not found"); }
		});
	} 
	else 
	{
		// User is signed out.
		console.log("User is not signed in.");
	}
});