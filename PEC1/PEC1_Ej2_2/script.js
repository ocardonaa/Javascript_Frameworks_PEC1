const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swapEl = document.getElementById('swap');
const waitingMessageEl = document.getElementById('waiting-message');

function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    //fetch('https://api.example.com/nonexistent') // fake API to test the error message
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok' + response);
            }
            return response.json();        
        })
        .then(data => {
            setTimeout(() => {
                waitingMessageEl.style.visibility = 'hidden'; // mensaje cuando se realiza una consulta a la API, tiene 1 segundo para que se vea
            }, 1000);
            const rate = data.rates[currency_two];
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            if(amountEl_one.value < 0) {
                amountEl_one.value = 0; // comprovamos que no sea negativo
            }
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
            waitingMessageEl.style.visibility = 'visible';
        })
        .catch(error => {
            alert(`Error on the API: ${error}`); // gestión de errores, el punto 2, arriba hay más de esta parte
        })
}

currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
amountEl_two.addEventListener('input', calculate);
swapEl.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});

calculate();