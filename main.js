const toggle = document.querySelector('input[checkbox]');
const annual = document.querySelector('annual-price');
const monthly = document.querySelector('monthly-price');

const monthlyAnnualPrices = () => {
    if(toggle.checked) {
        annual.style.display = "block";
        monthly.style.display = "none";
    }else {
        annual.style.display = "none";
        monthly.style.display = "block";
    }
}

toggle.addEventListener('click', monthlyAnnualPrices)