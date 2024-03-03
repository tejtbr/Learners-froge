function closePopup() {
  document.querySelector(".popup").style.display = "none";
}

function submitForm() {
  // Here you can add your form submission logic
  alert("Form submitted successfully!");
  closePopup(); // Close the popup after submission
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".popup").style.display = "block";
  }, 5000); // Show the popup after 5 seconds

  // Add event listener to close the popup when clicking outside of it
  document.querySelector(".popup").addEventListener("click", function (event) {
    if (event.target.classList.contains("popup")) {
      closePopup();
    }
  });
});
