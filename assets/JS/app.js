document.querySelector(".card-Number-input").oninput = () => {
    document.querySelector(".cardnumber").innerText =
        document.querySelector(".card-Number-input").value;
};

document.querySelector(".card-holder-input").oninput = () => {
    document.querySelector(".cardname").innerText =
        document.querySelector(".card-holder-input").value;
};


document.querySelector(".card-month-input").oninput = () => {
    document.querySelector(".cardexp").innerText =
        document.querySelector(".card-month-input").value;
};


document.querySelector(".card-year-input").oninput = () => {
    document.querySelector(".cardexpr").innerText =
        document.querySelector(".card-year-input").value;
};

document.querySelector(".card-cvc-input").oninput = () => {
    document.querySelector(".cvcnumber").innerText =
        document.querySelector(".card-cvc-input").value;
};