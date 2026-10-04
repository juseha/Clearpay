/* =========================================
   FEATURE FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-button");


const featureCards =
    document.querySelectorAll(".feature-card");


filterButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const selectedCategory =
                button.dataset.filter;


            /* Remove active class */

            filterButtons.forEach(function (item) {

                item.classList.remove("active");

            });


            /* Add active class */

            button.classList.add("active");


            /* Filter cards */

            featureCards.forEach(function (card) {

                const cardCategory =
                    card.dataset.category;


                if (
                    selectedCategory === "all" ||
                    cardCategory === selectedCategory
                ) {

                    card.style.display = "flex";

                } else {

                    card.style.display = "none";

                }

            });

        }
    );

});