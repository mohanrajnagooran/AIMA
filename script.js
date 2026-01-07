document.getElementById("applicationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  console.log("Form submitted:", data);

  alert("Thank you for your application! We will contact you soon.");

  this.reset();
});
