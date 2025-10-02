// Smooth scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});



// const form = document.getElementById("contact-form");
// const formMessage = document.getElementById("form-message");

// form.addEventListener("submit", function(e) {
//   e.preventDefault();

//   const name = form.name.value.trim();
//   const email = form.email.value.trim();
//   const message = form.message.value.trim();

//   if (!name || !email || !message) {
//     formMessage.textContent = "Please fill in all fields!";
//     return;
// //   }

// Contact form validation
const form = document.getElementById("contact-form")
const formMessage = document.getElementById("form-message")

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if(!name || !email || !message ){
  formMessage.textContent = "please fill in all fields";
  return;
  }

//   // Simple email regex
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     formMessage.textContent = "Please enter a valid email!";
//     return;
//   }

  // simple email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.testcontent = "Please Enter a Valid email";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "Message sent successfully! (Demo)";

  // Clear form
  form.reset();

})
//   
// });
