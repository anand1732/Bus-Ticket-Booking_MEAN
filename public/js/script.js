// // scripts.js

// document.addEventListener('DOMContentLoaded', () => {
//     const searchButton = document.querySelector('.search-box button');
//     const searchInput = document.querySelector('.search-box input[type="text"]');

//     searchButton.addEventListener('click', () => {
//         const query = searchInput.value;
//         alert(`You searched for: ${query}`);
//     });

//     searchInput.addEventListener('keypress', (event) => {
//         if (event.key === 'Enter') {
//             const query = searchInput.value;
//             alert(`You searched for: ${query}`);
//         }
//     });
// });



// document.addEventListener('DOMContentLoaded', () => {
//     const searchButton = document.querySelector('.search-box button');
//     const searchInput = document.querySelector('.search-box input[type="text"]');

//     searchButton.addEventListener('click', () => {
//         const query = searchInput.value;
//         alert(`You searched for: ${query}`);
//     });

//     searchInput.addEventListener('keypress', (event) => {
//         if (event.key === 'Enter') {
//             const query = searchInput.value;
//             alert(`You searched for: ${query}`);
//         }
//     });
// });
// document.addEventListener('DOMContentLoaded', (event) => {
//     // Set the current date as the default value for the date input
//     const dateInput = document.getElementById('date');
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
//     const day = String(today.getDate()).padStart(2, '0');
//     const currentDate = `${year}-${month}-${day}`;
//     dateInput.value = currentDate;

//     // Contact modal functionality
//     const modal = document.getElementById('contactModal');
//     const btn = document.getElementById('contactButton');
//     const span = document.getElementsByClassName('close')[0];

//     btn.onclick = function() {
//         modal.style.display = 'block';
//     }

//     span.onclick = function() {
//         modal.style.display = 'none';
//     }

//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = 'none';
//         }
//     }

//     // Prevent form submission and show an alert instead
//     document.getElementById('contactForm').addEventListener('submit', function(event) {
//         event.preventDefault();
//         alert('Thank you for contacting us!');
//         modal.style.display = 'none';
//     });
// });

// document.getElementById('searchForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Get form values
//     const origin = document.getElementById('origin').value;
//     const destination = document.getElementById('destination').value;
//     const date = document.getElementById('date').value;
    
//     // Sample data representing fetched bus results
//     const buses = [
//         { busId: 1, origin, destination, date, seats: 30, viewseats,},
//         { busId: 2, origin, destination, date, seats: 25, viewseats,},
//         { busId: 3, origin, destination, date, seats: 40, viewseats,},
//         { busId: 4, origin, destination, date, seats: 15, viewseats,},
//         { busId: 5, origin, destination, date, seats: 23, viewseats,},
//     ];

//     // Display results
//     const resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = '';  // Clear previous results

//     if (buses.length === 0) {
//         resultsDiv.innerHTML = '<p>No buses found.</p>';
//     } else {
//         buses.forEach(bus => {
//             const busDiv = document.createElement('div');
//             busDiv.classList.add('bus');
//             busDiv.innerHTML = `
//                 <span>${bus.origin} to ${bus.destination}</span>
//                 <span>Date: ${bus.date}</span>
//                 <span>Seats Available: ${bus.seats}</span>
//                 <button onclick="viewSeats(${bus.busId})">View Seats</button>
//             `;
//             resultsDiv.appendChild(busDiv);
//         });
//     }
// });
// function viewSeats(busId) {
//     // Redirect to the seats.html page (you can pass the busId as a query parameter if needed)
//     window.location.href = `../Seatselection/seats.html?busId=${busId}`;
// }

// document.getElementById('swapButton').addEventListener('click', function() {
//     let originInput = document.getElementById('origin');
//     let destinationInput = document.getElementById('destination');

//     let temp = originInput.value;
//     originInput.value = destinationInput.value;
//     destinationInput.value = temp;
// });

document.addEventListener('DOMContentLoaded', () => {
    // Set up search functionality
    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input[type="text"]');

    const handleSearch = () => {
        const query = searchInput.value;
        alert(`You searched for: ${query}`);
    };

    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    // Set the current date as the default value for the date input
    const dateInput = document.getElementById('date');
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    dateInput.value = `${year}-${month}-${day}`;

    // Contact modal functionality
    const modal = document.getElementById('contactModal');
    const btn = document.getElementById('contactButton');
    const span = document.getElementsByClassName('close')[0];

    btn.onclick = () => {
        modal.style.display = 'block';
    };

    span.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Prevent form submission and show an alert instead
    document.getElementById('contactForm').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for contacting us!');
        modal.style.display = 'none';
    });

    // Handle search form submission
    document.getElementById('searchForm').addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form values
        const origin = document.getElementById('origin').value;
        const destination = document.getElementById('destination').value;
        const date = document.getElementById('date').value;

        // Sample data representing fetched bus results
        const buses = [
            { busId: 1, origin, destination, date, seats: 30 },
            { busId: 2, origin, destination, date, seats: 25 },
            { busId: 3, origin, destination, date, seats: 40 },
            { busId: 4, origin, destination, date, seats: 15 },
            { busId: 5, origin, destination, date, seats: 23 },
        ];

        // Display results
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';  // Clear previous results

        if (buses.length === 0) {
            resultsDiv.innerHTML = '<p>No buses found.</p>';
        } else {
            buses.forEach(bus => {
                const busDiv = document.createElement('div');
                busDiv.classList.add('bus');
                busDiv.innerHTML = `
                    <span>${bus.origin} to ${bus.destination}</span>
                    <span>Date: ${bus.date}</span>
                    <span>Seats Available: ${bus.seats}</span>
                    <button onclick="viewSeats(${bus.busId})">View Seats</button>
                `;
                resultsDiv.appendChild(busDiv);
            });
        }
    });

    // Swap origin and destination values
    document.getElementById('swapButton').addEventListener('click', () => {
        const originInput = document.getElementById('origin');
        const destinationInput = document.getElementById('destination');

        const temp = originInput.value;
        originInput.value = destinationInput.value;
        destinationInput.value = temp;
    });
});

function viewSeats(busId) {
    // Redirect to the seats.html page (corrected path)
    window.location.href = `./seatselection/seats.html?busId=${busId}`;
}
;