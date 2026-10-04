/* =========================================
   CONTACT FORM VALIDATION
========================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {


    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* Clear previous errors */

            clearErrors();


            const name =
                document.getElementById("name").value.trim();


            const email =
                document.getElementById("email").value.trim();


            const reason =
                document.getElementById("reason").value;


            const message =
                document.getElementById("message").value.trim();


            let isValid = true;


            /* Name */

            if (name.length < 2) {

                showError(
                    "name",
                    "Please enter your full name."
                );

                isValid = false;

            }


            /* Email */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                showError(
                    "email",
                    "Please enter a valid email address."
                );

                isValid = false;

            }


            /* Reason */

            if (reason === "") {

                showError(
                    "reason",
                    "Please choose a reason."
                );

                isValid = false;

            }


            /* Message */

            if (message.length < 10) {

                showError(
                    "message",
                    "Message must be at least 10 characters."
                );

                isValid = false;

            }


            /* Success */

            if (isValid) {

                const success =
                    document.getElementById("formSuccess");


                success.textContent =
                    "Thank you! Your message has been received in this demo.";


                contactForm.reset();

            }

        }
    );

}


/* =========================================
   SHOW ERROR
========================================= */

function showError(fieldId, message) {

    const error =
        document.getElementById(
            fieldId + "Error"
        );


    const field =
        document.getElementById(fieldId);


    if (error) {

        error.textContent = message;

    }


    if (field) {

        field.setAttribute(
            "aria-invalid",
            "true"
        );

    }

}


/* =========================================
   CLEAR ERRORS
========================================= */

function clearErrors() {

    const errors =
        document.querySelectorAll(".error-message");


    errors.forEach(function (error) {

        error.textContent = "";

    });


    const fields =
        document.querySelectorAll(
            "#contactForm input, #contactForm select, #contactForm textarea"
        );


    fields.forEach(function (field) {

        field.removeAttribute("aria-invalid");

    });


    const success =
        document.getElementById("formSuccess");


    if (success) {

        success.textContent = "";

    }

}