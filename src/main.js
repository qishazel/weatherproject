// document.addEventListener('DOMContentLoaded', function() {
//   const bookingForm = document.getElementById('bookingForm');

//   if (bookingForm) {
//       bookingForm.addEventListener('submit', function(event) {
//           event.preventDefault(); // Prevent the form from submitting normally

//           // Display pop-up message
//           window.alert("Form submitted successfully!");

//           // Redirect to the same page (booking.html)
//           window.location.href = 'booking.html';
//       });
//   }

//   const readFormDataButton = document.getElementById('readFormData');
//   if (readFormDataButton) {
//       readFormDataButton.addEventListener('click', function() {
//           // Retrieve form data from local storage
//           const formData = JSON.parse(localStorage.getItem('formData'));

//           // Display form data
//           const formDataDisplay = document.getElementById('formDataDisplay');
//           if (formDataDisplay) {
//               let displayHTML = '';
//               for (const key in formData) {
//                   if (formData.hasOwnProperty(key)) {
//                       displayHTML += `<p><strong>${key}:</strong> ${formData[key]}</p>`;
//                   }
//               }
//               formDataDisplay.innerHTML = displayHTML;
//           }
//       });
//   }
// });
