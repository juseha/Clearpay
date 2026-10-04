/* =========================================
   CLEARPAY PRICING CALCULATOR
========================================= */

const volumeInput =
    document.getElementById("volume");

const transactionsInput =
    document.getElementById("transactions");

const internationalInput =
    document.getElementById("international");

const businessSizeInput =
    document.getElementById("businessSize");


const monthlyCost =
    document.getElementById("monthlyCost");

const annualCost =
    document.getElementById("annualCost");

const effectiveRate =
    document.getElementById("effectiveRate");

const planName =
    document.getElementById("planName");


function calculatePrice() {

    const volume =
        Number(volumeInput.value) || 0;


    const transactions =
        Number(transactionsInput.value) || 0;


    const international =
        internationalInput.value;


    const businessSize =
        businessSizeInput.value;


    /* Base percentage */

    let rate = 0.003;


    /* International fee */

    if (international === "yes") {

        rate += 0.001;

    }


    /* Business size */

    let baseFee = 0;


    if (businessSize === "small") {

        baseFee = 0;

    }

    else if (businessSize === "medium") {

        baseFee = 29;

    }

    else {

        baseFee = 79;

    }


    /* Transaction fee */

    const transactionFee =
        transactions * 0.05;


    /* Percentage fee */

    const volumeFee =
        volume * rate;


    /* Final price */

    const total =
        baseFee +
        transactionFee +
        volumeFee;


    const yearly =
        total * 12;


    /* Display */

    monthlyCost.textContent =
        "$" + total.toFixed(2);


    annualCost.textContent =
        "$" + yearly.toFixed(2);


    effectiveRate.textContent =
        (rate * 100).toFixed(2) + "%";


    planName.textContent =
        businessSize === "small"
            ? "Clear"
            : businessSize === "medium"
            ? "Grow"
            : "Scale";

}


/* =========================================
   LIVE UPDATE
========================================= */

volumeInput.addEventListener(
    "input",
    calculatePrice
);


transactionsInput.addEventListener(
    "input",
    calculatePrice
);


internationalInput.addEventListener(
    "change",
    calculatePrice
);


businessSizeInput.addEventListener(
    "change",
    calculatePrice
);


/* Initial calculation */

calculatePrice();