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



/* Buttons will highlight if they are hovered on, except for the button of the page that you are currently on. */
/* Added by Zaynin 2/16/2024 @2:40pm */
var home_button = document.getElementById("home_button");
var faq_button = document.getElementById("faq_button");
var about_button = document.getElementById("about_button");

var currentTab = "home";


// Home Button Click Event - sets the current tab name
home_button.addEventListener("click", function ()
{
	if (currentTab != "home")
	{
		currentTab = "home";
	}

});

// Home Button Hover Event
home_button.addEventListener("mouseover", function ()
{
	if (currentTab != "home")
	{
		home_button.style.filter = "brightness(50%)";
	}
});

// Home Button Unhover Event
home_button.addEventListener("mouseout", function ()
{
	if (currentTab != "home")
	{
		home_button.style.filter = "brightness(100%)";
	}
});




// FAQ Button Click Event - sets the current tab name
faq_button.addEventListener("click", function ()
{
	if (currentTab != "faq")
	{
		currentTab = "faq";
	}

});

// FAQ Button Hover Event
faq_button.addEventListener("mouseover", function ()
{
	if (currentTab != "faq")
	{
		faq_button.style.filter = "brightness(50%)";
	}
});

// FAQ Button Unhover Event
faq_button.addEventListener("mouseout", function ()
{
	if (currentTab != "faq")
	{
		faq_button.style.filter = "brightness(100%)";
	}
});




// About Button Click Event - sets the current tab name
about_button.addEventListener("click", function ()
{
	if (currentTab != "about")
	{
		currentTab = "about";
	}

});

// About Button Hover Event
faq_button.addEventListener("mouseover", function ()
{
	if (currentTab != "about")
	{
		about_button.style.filter = "brightness(50%)";
	}
});

// About Button Unhover Event
faq_button.addEventListener("mouseout", function ()
{
	if (currentTab != "about")
	{
		about_button.style.filter = "brightness(100%)";
	}
});


