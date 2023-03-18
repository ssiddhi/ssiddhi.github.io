// Whenever the user submits the form, output the form data in the given format in the console.
// fetch JavaScript objects representing specific elements in the DOM
let form = document.querySelector("form");

// add an event listener on the target element
form.addEventListener("submit", handleSubmit);

// handle the form data
function handleSubmit(event) {
  // stop form submission
  event.preventDefault();

  let formData = new FormData(event.target);

  let nameInput = formData.get("username");
  let emailInput = formData.get("email");
  let messageInput = formData.get("message");

  // When the form loads, it should be empty, meaning there should be no default value on any item
  // when user directly hits submit button with no input
  if (
    (nameInput === null || nameInput === "") &&
    (emailInput === null || emailInput === "") &&
    (messageInput === null || messageInput === "")
  ) {
    alert("You must enter some data to submit this form");
    return false;
  } else {
    // printing user input data to console
    console.log("========= Form Submission =========");

    if (nameInput === null || nameInput === "") {
      alert("Name: No submission");
    } else {
      console.log("Name: " + nameInput);
    }

    if (emailInput === null || emailInput === "") {
      alert("Email: No submission");
    } else {
      console.log("Email: " + emailInput);
    }

    if (messageInput === null || messageInput === "") {
      alert("Message: No submission");
    } else {
      console.log("Message: " + messageInput);
    }
  }
}
