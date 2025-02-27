const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const currencyElement = document.getElementById('currency');
const currencyNameTotal = document.getElementById('currency-total');

let originalPrices = [];

populateUI();

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

    originalPrices = [...movieSelect.options].map(movie => movie.value);
}

function fixCurrency(arrFilm, price, currency) {
    const separatedFilm = arrFilm.split(' ');
    separatedFilm[separatedFilm.length-1] = currency;
    separatedFilm[separatedFilm.length-2] = price;
    const fixedFilm = separatedFilm.join(' ');
    return fixedFilm;
}

function calculateTicketPricing() {
    fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
        .then(res => res.json())
        .then(data => {
            const currency = currencyElement.value;
            const rate = data.rates[currency];
            const movies = movieSelect.options;
            Array.from(movies).map((movie, index) => {
                movie.value = (originalPrices[index] * rate).toFixed(2);
                movie.innerText = fixCurrency(movie.innerText, movie.value, currency);
            });
            const auxTotal = (count.innerText * movieSelect.value).toFixed(2);
            total.innerText = auxTotal;
            currencyNameTotal.innerText = currency;
        });
}

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    const auxTotal = (selectedSeatsCount * movieSelect.value).toFixed(2); 
    total.innerText = auxTotal;
}

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
  }

container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

movieSelect.addEventListener('change', (e) => {
    currentFilm = e.target[e.target.selectedIndex].innerText;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

currencyElement.addEventListener('change', calculateTicketPricing);

updateSelectedCount();