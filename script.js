document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.question button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const faq = button.nextElementSibling;
            const icon = button.querySelector('.d-arrow');

            faq.classList.toggle('show');
            icon.classList.toggle('rotate');
        });
    });
});

// Function to show the home tab content on page load
// Shows home tab on startup. (will have to do login instead) 
function showHomeTab() {
  // Hide all tab contents
  var tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(function(tabContent) {
    tabContent.style.display = 'none';
  });

  // Show the home tab content
  document.getElementById('home').style.display = 'block';
}

// Call the function to show the home tab content on page load
window.onload = showHomeTab;

// Define the openTab function
function openTab(tabName) {
  var tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(function(tabContent) {
    tabContent.style.display = 'none';
  });

  document.getElementById(tabName).style.display = 'block';

  var tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(function(tabButton) {
    tabButton.classList.remove('active');
  });

  var clickedButton = document.querySelector('[onclick="openTab(\'' + tabName + '\')"]');
  if (clickedButton) {
    clickedButton.classList.add('active');
  }
}

// Clicking on MADZ logo will go to home page
var madzLogoButton = document.getElementById("madz_logo");

madzLogoButton.addEventListener("click", function() {
  window.location.href = "index.html";
});

/* Buttons will highlight if they are hovered on, except for the button of the page that you are currently on. */
var home_button = document.getElementById("home_button");
var faq_button = document.getElementById("faq_button");
var about_button = document.getElementById("about_button");

var currentTab = "home";
home_button.style.filter = "brightness(150%)";

home_button.addEventListener("click", function() {
  resetButtonColors();
  if (currentTab != "home") {
    currentTab = "home";
    home_button.style.filter = "brightness(150%)";
  }
});

home_button.addEventListener("mouseover", function() {
  if (currentTab != "home") {
    home_button.style.filter = "brightness(150%)";
  }
});

home_button.addEventListener("mouseout", function() {
  if (currentTab != "home") {
    home_button.style.filter = "brightness(100%)";
  }
});

faq_button.addEventListener("click", function() {
  resetButtonColors();
  if (currentTab != "faq") {
    currentTab = "faq";
    faq_button.style.filter = "brightness(150%)";
  }
});

faq_button.addEventListener("mouseover", function() {
  if (currentTab != "faq") {
    faq_button.style.filter = "brightness(150%)";
  }
});

faq_button.addEventListener("mouseout", function() {
  if (currentTab != "faq") {
    faq_button.style.filter = "brightness(100%)";
  }
});

about_button.addEventListener("click", function() {
  resetButtonColors();
  if (currentTab != "about") {
    currentTab = "about";
    about_button.style.filter = "brightness(150%)";
  }
});

about_button.addEventListener("mouseover", function() {
  if (currentTab != "about") {
    about_button.style.filter = "brightness(150%)";
  }
});

about_button.addEventListener("mouseout", function() {
  if (currentTab != "about") {
    about_button.style.filter = "brightness(100%)";
  }
});

request_button.addEventListener("click", function() {
  resetButtonColors();
  if (currentTab != "about") {
    currentTab = "request";
    request_button.style.filter = "brightness(150%)";
  }
});

request_button.addEventListener("mouseover", function() {
  if (currentTab != "request") {
    request_button.style.filter = "brightness(150%)";
  }
});

request_button.addEventListener("mouseout", function() {
  if (currentTab != "request") {
    request_button.style.filter = "brightness(100%)";
  }
});

function resetButtonColors() {
  home_button.style.filter = "brightness(100%)";
  faq_button.style.filter = "brightness(100%)";
  about_button.style.filter = "brightness(100%)";
  request_button.style.filter = "brightness(100%)";
}





