document.addEventListener("DOMContentLoaded", function () {

    // --- Countdown Timer Logic (for index.html) ---
    // Check if the timer elements exist on the page
    if (document.getElementById('years')) {
        const startDate = new Date('2023-11-20T00:00:00'); // วันที่เริ่มคบกัน: 20 พฤศจิกายน 2566

        function updateCountdown() {
            const now = new Date();
            const diff = now - startDate;

            // Calculations
            const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

            let years = now.getFullYear() - startDate.getFullYear();
            let months = now.getMonth() - startDate.getMonth();
            let days = now.getDate() - startDate.getDate();

            if (days < 0) {
                months--;
                // Get the last day of the previous month
                const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                days += lastMonth.getDate();
            }
            if (months < 0) {
                years--;
                months += 12;
            }

            // Update HTML elements
            document.getElementById('years').innerText = years;
            document.getElementById('months').innerText = months;
            document.getElementById('days').innerText = days;
            document.getElementById('total-days').innerText = totalDays;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
        }

        // Run the function every second
        setInterval(updateCountdown, 1000);

        // Initial call to display time immediately without waiting for the first second
        updateCountdown();
    }
    
    const PHOTO_FILES = [];
    for (let i = 1; i <= 52; i++) {
        PHOTO_FILES.push(`images/pic${i}.jpg`);
    }
});