// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    // Form fields
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const birthdate = document.getElementById("birthdate");
    const quantity = document.getElementById("quantity");
    const fileInput = document.getElementById("file");

    // Add event listener for form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from submitting immediately

        // Simple validation
        if (username.value.trim() === "") {
            alert("Username is required.");
            username.focus();
            return;
        }

        if (password.value.trim() === "") {
            alert("Password is required.");
            password.focus();
            return;
        }

        if (!email.value.includes("@")) {
            alert("Please enter a valid email address.");
            email.focus();
            return;
        }

        if (phone.value.length !== 10) {
            alert("Phone number must be 10 digits.");
            phone.focus();
            return;
        }

        if (!birthdate.value) {
            alert("Please select your birthdate.");
            birthdate.focus();
            return;
        }

        if (quantity.value < 0 || quantity.value > 9) {
            alert("Quantity must be between 0 and 9.");
            quantity.focus();
            return;
        }

        if (!document.querySelector("input[name='title']:checked")) {
            alert("Please select a title.");
            return;
        }

        if (fileInput.files.length === 0) {
            alert("Please upload a file.");
            fileInput.focus();
            return;
        }

        // Gather form data
        const formData = new FormData(form);

        // Display form data in the console
        console.log("Form Submitted with the following data:");
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        alert("Form submitted successfully!");

        // Submit the form (if you need to use the action attribute)
        // form.submit();
    });

    // Event listener for the reset button
    form.addEventListener("reset", () => {
        alert("Form has been reset.");
    });
});
