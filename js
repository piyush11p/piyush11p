// index.js

document.addEventListener('DOMContentLoaded', function() {
    const pricingToggle = document.getElementById('pricing-toggle');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    const monthlyPrices = document.querySelectorAll('.monthly-price');

    pricingToggle.addEventListener('change', function() {
        if (pricingToggle.checked) {
            yearlyPrices.forEach(price => {
                price.style.opacity = '0';
                setTimeout(() => {
                    price.style.display = 'none';
                    monthlyPrices.forEach(price => {
                        price.style.display = 'block';
                        setTimeout(() => price.style.opacity = '1', 50);
                    });
                }, 300);
            });
        } else {
            monthlyPrices.forEach(price => {
                price.style.opacity = '0';
                setTimeout(() => {
                    price.style.display = 'none';
                    yearlyPrices.forEach(price => {
                        price.style.display = 'block';
                        setTimeout(() => price.style.opacity = '1', 50);
                    });
                }, 300);
            });
        }
    });
});
