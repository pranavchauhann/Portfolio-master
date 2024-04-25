// add class navbarDark on navbar scroll

const header = document.querySelector('.navbar');

window.onscroll = function effects() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// function myFunction() {
//     var x = document.getElementById("navbar");
//     if (x.className === "navbar") {
//       x.className += " responsive";
//     } else {
//       x.className = "navbar";
//     }
//   }


// Title of website.

window.onload = function(){

    var pageTitle = document.title;
    var attentionMessage = "Come Back!";
    var blinkEvent = null;

    document.addEventListener('visibilitychange', function(e)
    { var isPageActive =!document.hidden;

        if(!isPageActive){
            blink();
        }else{
            document.title = pageTitle;
            clearInterval(blinkEvent);
        }
    });

function blink(){
    blinkEvent = setInterval(function(){
        if(document.title === attentionMessage){
            document.title = pageTitle;
        }else{
            document.title = attentionMessage;
        }
    },100);
}
};

// Typewriter animation
const animatedLine = document.getElementById("animated-line");
const typewriterText = [
    "I love coding",
    "I code cool websites"
];

let currentTextIndex = 0; // Index of the current text being displayed
let currentCharIndex = 0; // Index of the current character being displayed
let isDeleting = false; // Flag to indicate whether characters are being deleted

function animateText() {
    const currentText = typewriterText[currentTextIndex];
    
    if (!isDeleting) {
        // Add characters one by one
        animatedLine.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;

        // Check if all characters have been added
        if (currentCharIndex === currentText.length) {
            // Start deleting characters after a delay
            isDeleting = true;
            setTimeout(() => {
                currentCharIndex--;
                animateText();
            }, 2000); // Delay before starting deletion
        }
    } else {
        // Delete characters one by one
        animatedLine.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;

        // Check if all characters have been deleted
        if (currentCharIndex === 0) {
            // Move to the next text after a delay
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % typewriterText.length;
            setTimeout(animateText, 1000); // Delay before starting the next text
        }
    }
}

// Start the typewriter animation
animateText();



// Loader
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

