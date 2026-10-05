
/* =================================
   CLEARPAY JAVASCRIPT
================================= */


/* =================================
   MOBILE MENU
================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("show");

    });

}


/* =================================
   DARK / LIGHT THEME
================================= */

const themeBtn = document.getElementById("themeBtn");

const savedTheme =
    localStorage.getItem("clearpay-theme");


if (savedTheme === "dark") {

    document.documentElement
        .setAttribute("data-theme", "dark");

    if (themeBtn) {

        themeBtn.textContent = "☀️";

    }

}


if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        const currentTheme =
            document.documentElement
                .getAttribute("data-theme");


        if (currentTheme === "dark") {

            document.documentElement
                .removeAttribute("data-theme");

            localStorage.setItem(
                "clearpay-theme",
                "light"
            );

            themeBtn.textContent = "🌙";


        } else {

            document.documentElement
                .setAttribute(
                    "data-theme",
                    "dark"
                );

            localStorage.setItem(
                "clearpay-theme",
                "dark"
            );

            themeBtn.textContent = "☀️";

        }

    });

}


/* =================================
   SCROLL REVEAL
================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if (revealElements.length > 0) {

    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add("visible");

                        revealObserver
                            .unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

}


/* =================================
   SCROLL PROGRESS
================================= */

const scrollProgress =
    document.getElementById("scrollProgress");


window.addEventListener("scroll", function () {

    if (!scrollProgress) {
        return;
    }


    const scrollTop =
        window.scrollY;


    const documentHeight =
        document.documentElement
            .scrollHeight -
        window.innerHeight;


    if (documentHeight <= 0) {
        return;
    }


    const percentage =
        (scrollTop / documentHeight) * 100;


    scrollProgress.style.width =
        percentage + "%";

});


/* =================================
   FEATURE FILTER
================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const featureCards =
    document.querySelectorAll(".feature-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const selectedFilter =
            button.getAttribute("data-filter");


        featureCards.forEach(function (card) {

            const category =
                card.getAttribute("data-category");


            if (
                selectedFilter === "all" ||
                category === selectedFilter
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =================================
   PRICING CALCULATOR
================================= */

const calculateBtn =
    document.getElementById("calculateBtn");

const salesInput =
    document.getElementById("sales");

const transactionsInput =
    document.getElementById("transactions");

const calculatorResult =
    document.getElementById(
        "calculatorResult"
    );


function calculateFee() {

    if (
        !salesInput ||
        !transactionsInput ||
        !calculatorResult
    ) {
        return;
    }


    const sales =
        Number(
            salesInput.value
        );


    const transactions =
        Number(
            transactionsInput.value
        );


    if (
        sales <= 0 ||
        transactions <= 0
    ) {

        calculatorResult.textContent =
            "Please enter valid values.";

        return;

    }


    /*
        Example ClearPay fee:
        2.9% of sales + $0.30 per transaction
    */

    const percentageFee =
        sales * 0.029;


    const transactionFee =
        transactions * 0.30;


    const totalFee =
        percentageFee +
        transactionFee;


    calculatorResult.innerHTML =
        "Estimated monthly fee: <strong>$" +
        totalFee.toFixed(2) +
        "</strong>";

}


/* Calculate button */

if (calculateBtn) {

    calculateBtn.addEventListener(
        "click",
        calculateFee
    );

}


/* Real-time calculation */

if (salesInput) {

    salesInput.addEventListener(
        "input",
        calculateFee
    );

}


if (transactionsInput) {

    transactionsInput.addEventListener(
        "input",
        calculateFee
    );

}


/* =================================
   CONTACT FORM VALIDATION
================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name");


            const email =
                document.getElementById("email");


            const message =
                document.getElementById("message");


            const nameError =
                document.getElementById(
                    "nameError"
                );


            const emailError =
                document.getElementById(
                    "emailError"
                );


            const messageError =
                document.getElementById(
                    "messageError"
                );


            const formSuccess =
                document.getElementById(
                    "formSuccess"
                );


            nameError.textContent = "";
            emailError.textContent = "";
            messageError.textContent = "";
            formSuccess.textContent = "";


            let isValid = true;


            /* NAME */

            if (
                name.value.trim() === ""
            ) {

                nameError.textContent =
                    "Please enter your name.";

                isValid = false;


            } else if (
                name.value.trim().length < 3
            ) {

                nameError.textContent =
                    "Name must contain at least 3 characters.";

                isValid = false;

            }


            /* EMAIL */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                email.value.trim() === ""
            ) {

                emailError.textContent =
                    "Please enter your email.";

                isValid = false;


            } else if (
                !emailPattern.test(
                    email.value.trim()
                )
            ) {

                emailError.textContent =
                    "Please enter a valid email.";

                isValid = false;

            }


            /* MESSAGE */

            if (
                message.value.trim() === ""
            ) {

                messageError.textContent =
                    "Please enter your message.";

                isValid = false;


            } else if (
                message.value.trim().length < 10
            ) {

                messageError.textContent =
                    "Message must contain at least 10 characters.";

                isValid = false;

            }


            /* SUCCESS */

            if (isValid) {

                formSuccess.textContent =
                    "Thank you! Your message has been submitted successfully.";

                contactForm.reset();

            }

        }
    );

}