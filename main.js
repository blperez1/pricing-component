const toggle = document.querySelector('#toggleSwitch');
const annual = document.querySelectorAll('.annual-price');
const monthly = document.querySelectorAll('.monthly-price');

monthly.forEach(month => month.classList.add("hide"))


const monthlyAnnualPrices = () => {
    if(toggle.checked) {
        monthly.forEach(month => month.classList.remove("hide"))
        annual.forEach(year =>  year.classList.add("hide"))
    }else {
        monthly.forEach(month => month.classList.add("hide"))
        annual.forEach(year =>  year.classList.remove("hide"))
    }
}


toggle.addEventListener('click', monthlyAnnualPrices);