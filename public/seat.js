// seat.js

document.addEventListener('DOMContentLoaded', () => {
    const seatGrid = document.getElementById('seatGrid');
    const seatList = document.getElementById('seatList');
    const confirmButton = document.getElementById('confirmButton');
    const totalAmount = document.getElementById('totalAmount');

    const seatPrice = 800;

    // Get route and date from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const origin = urlParams.get('origin');
    const destination = urlParams.get('destination');
    const date = urlParams.get('date');

    for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 3; col++) {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.textContent = `${String.fromCharCode(64 + row)}${col}`;
            seat.addEventListener('click', () => toggleSeatSelection(seat));
            seatGrid.appendChild(seat);
        }
    }

    function toggleSeatSelection(seat) {
        seat.classList.toggle('selected');
        updateSelectedSeats();
    }

    function updateSelectedSeats() {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        seatList.innerHTML = '';
        selectedSeats.forEach(seat => {
            const listItem = document.createElement('li');
            listItem.textContent = seat.textContent;
            seatList.appendChild(listItem);
        });

        const total = selectedSeats.length * seatPrice;
        totalAmount.textContent = `Total Amount: ₹${total}`;
    }

    confirmButton.addEventListener('click', () => {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        if (selectedSeats.length === 0) {
            alert('Please select at least one seat.');
            return;
        }

        const seatNumbers = Array.from(selectedSeats).map(seat => seat.textContent);
        
        // Redirect to tick.html with selected data
        window.location.href = `tick.html?origin=${origin}&destination=${destination}&date=${date}&seats=${seatNumbers.join(',')}&totalAmount=${selectedSeats.length * seatPrice}`;
    });
});
