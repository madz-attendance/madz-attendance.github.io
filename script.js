function openTab(tabId) {
  // Hide all tab contents
  var tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(function(tabContent) {
    tabContent.style.display = 'none';
  });

  // Show the selected tab content
  document.getElementById(tabId).style.display = 'block';

  // Deactivate all tab buttons
  var tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(function(tabButton) {
    tabButton.classList.remove('active');
  });

  // Activate the clicked tab button
  var clickedButton = document.querySelector('[onclick="openTab(\'' + tabId + '\')"]');
  if (clickedButton) {
    clickedButton.classList.add('active');
  }
}

// Clicking on MADZ logo will go to home page
// Added by Zaynin 2/16/2024 @5:45pm
var madzLogoButton = document.getElementById("madz_logo");

madzLogoButton.addEventListener("click", function ()
{
	window.location.href = "index.html";
});



/* Buttons will highlight if they are hovered on, except for the button of the page that you are currently on. */
/* Added by Zaynin 2/16/2024 @2:40pm */
var home_button = document.getElementById("home_button");
var faq_button = document.getElementById("faq_button");
var about_button = document.getElementById("about_button");

var currentTab = "home";
home_button.style.filter = "brightness(150%)";

// Home Button Click Event - sets the current tab name
// Description: When you click on the this button, if this button is not already
//              pressed, then it will reset all of the button colors, set currentTab to the current tab,
//              and then increase the brightness of this tab button to show that this is
//              the tab that the user is currently on.
home_button.addEventListener("click", function ()
{
	resetButtonColors();
	if (currentTab != "home")
	{
		currentTab = "home";
		home_button.style.filter = "brightness(150%)";
	}

});

// Home Button Hover Event
// Description: When you hover over this button, if the user is not already on this
//              tab, then increase the brightness of the button to show that this is a clickable
//              button. Otherwise, if you are on this tab already, then it is already brightened,
//              so no need to do anything.
home_button.addEventListener("mouseover", function ()
{
	if (currentTab != "home")
	{
		home_button.style.filter = "brightness(150%)";
	}
});

// Home Button Unhover Event
// Description: When you unhover over this button, if the user is not already on this tab,
//              then decrease the brightness back to its default, since the user is no longer hovering
//              over it. Otherwise, if the user is already on this tab, then do not decrease the brightness,
//              as this button is supposed to be brightened to signify that the user is currently on this tab.
home_button.addEventListener("mouseout", function ()
{
	if (currentTab != "home")
	{
		home_button.style.filter = "brightness(100%)";
	}
});




// FAQ Button Click Event - sets the current tab name
// Description: When you click on the this button, if this button is not already
//              pressed, then it will reset all of the button colors, set currentTab to the current tab,
//              and then increase the brightness of this tab button to show that this is
//              the tab that the user is currently on.
faq_button.addEventListener("click", function ()
{
	resetButtonColors();
	if (currentTab != "faq")
	{
		currentTab = "faq";
		faq_button.style.filter = "brightness(150%)";
	}


});

// FAQ Button Hover Event
// Description: When you hover over this button, if the user is not already on this
//              tab, then increase the brightness of the button to show that this is a clickable
//              button. Otherwise, if you are on this tab already, then it is already brightened,
//              so no need to do anything.
faq_button.addEventListener("mouseover", function ()
{
	if (currentTab != "faq")
	{
		faq_button.style.filter = "brightness(150%)";
	}
});

// FAQ Button Unhover Event
// Description: When you unhover over this button, if the user is not already on this tab,
//              then decrease the brightness back to its default, since the user is no longer hovering
//              over it. Otherwise, if the user is already on this tab, then do not decrease the brightness,
//              as this button is supposed to be brightened to signify that the user is currently on this tab.
faq_button.addEventListener("mouseout", function ()
{
	if (currentTab != "faq")
	{
		faq_button.style.filter = "brightness(100%)";
	}
});




// About Button Click Event - sets the current tab name
// Description: When you click on the this button, if this button is not already
//              pressed, then it will reset all of the button colors, set currentTab to the current tab,
//              and then increase the brightness of this tab button to show that this is
//              the tab that the user is currently on.
about_button.addEventListener("click", function ()
{
	resetButtonColors();
	if (currentTab != "about")
	{
		currentTab = "about";
		about_button.style.filter = "brightness(150%)";
	}

});

// About Button Hover Event
// Description: When you hover over this button, if the user is not already on this
//              tab, then increase the brightness of the button to show that this is a clickable
//              button. Otherwise, if you are on this tab already, then it is already brightened,
//              so no need to do anything.
about_button.addEventListener("mouseover", function ()
{
	if (currentTab != "about")
	{
		about_button.style.filter = "brightness(150%)";
	}
});

// About Button Unhover Event
// Description: When you unhover over this button, if the user is not already on this tab,
//              then decrease the brightness back to its default, since the user is no longer hovering
//              over it. Otherwise, if the user is already on this tab, then do not decrease the brightness,
//              as this button is supposed to be brightened to signify that the user is currently on this tab.
about_button.addEventListener("mouseout", function ()
{
	if (currentTab != "about")
	{
		about_button.style.filter = "brightness(100%)";
	}
});


// resetButtonColors()
// Description: Resets all button colors to their default brightness (100%).
function resetButtonColors()
{
	home_button.style.filter = "brightness(100%)";
	faq_button.style.filter = "brightness(100%)";
	about_button.style.filter = "brightness(100%)";
}


document.addEventListener('DOMContentLoaded', function() {
    var faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            var parent = this.parentElement;
            parent.classList.toggle('active');
        });
    });
});




