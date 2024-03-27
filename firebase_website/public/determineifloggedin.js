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




//DETERMINE IF A USER IS LOGGED IN (CONSTANTLY CHECKS)
// Get a reference to the Firebase authentication service
const auth = firebase.auth();

// Set up an authentication state change listener
auth.onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log("User is signed in");
        // You can redirect the user to a logged-in page or perform other actions
		window.location.href = "useraccount.html";
    } else {
        // No user is signed in.
        console.log("No user is signed in");
        // You can prompt the user to log in or show a login form
		window.location.href = "chooseloginaction.html";
    }
});
