function closePopup() {
  document.querySelector(".popup").style.display = "none";
}

function submitForm() {
  // Here you can add your form submission logic
  alert("Form submitted successfully!");
  closePopup(); // Close the popup after submission
  // Set a flag in local storage indicating that the popup has been shown and the form submitted
  localStorage.setItem("popupShown", "true");
}

document.addEventListener("DOMContentLoaded", function () {
  // Check if the popup has been shown before
  if (!localStorage.getItem("popupShown")) {
    setTimeout(function () {
      document.querySelector(".popup").style.display = "block";
    }, 5000); // Show the popup after 5 seconds
  }

  // Add event listener to close the popup when clicking outside of it
  document.querySelector(".popup").addEventListener("click", function (event) {
    if (event.target.classList.contains("popup")) {
      closePopup();
    }
  });

  // Add event listener for form submission
  document
    .querySelector("#popupForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
      submitForm();
    });
});
