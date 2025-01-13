// src/js/trailerForm.js

const trailers = [];
const trailerForm = document.getElementById('trailerForm');
const trailerListContainer = document.getElementById('trailerList');
const trailersList = document.getElementById('trailers');
const addTrailerButton = document.getElementById('addTrailer');
const submitTrailersButton = document.getElementById('submitTrailers');

document.getElementById('trailerType').addEventListener('change', function () {
    let fuelLevelContainer = document.getElementById('fuelLevelContainer');
    if (this.value === 'reefer') {
        fuelLevelContainer.classList.remove('hidden');
    } else {
        fuelLevelContainer.classList.add('hidden');
    }
});

document.getElementById('fuelLevel').addEventListener('input', function () {
    document.getElementById('fuelLevelValue').textContent = this.value + '%';
});

addTrailerButton.addEventListener('click', function () {
    const yardLocation = document.getElementById('yardLocation').value;

    const trailerData = {
        trailerType: document.getElementById('trailerType').value.toLowerCase(),
        condition: document.getElementById('condition').value,
        number: parseInt(document.getElementById('number').value, 10),
        loaded: document.querySelector('input[name="loaded"]:checked')?.value === 'loaded',
        driverNotes: document.getElementById('driverNotes').value || null,
        fuelLevel: document.getElementById('fuelLevelContainer').classList.contains('hidden')
            ? null
            : parseInt(document.getElementById('fuelLevel').value, 10),
        currentLocation: document.getElementById('yardLocation').value,
    };

    trailers.push(trailerData);

    const listItem = document.createElement('li');
    listItem.textContent = `${trailerData.number}`;
    listItem.className = 'list-none px-4 py-2 font-semibold bg-slate-100 border border-gray-300 rounded-md';
    trailersList.appendChild(listItem);

    trailerListContainer.classList.remove('hidden');

    trailerForm.reset();
    document.getElementById('yardLocation').value = yardLocation;
    document.getElementById('fuelLevelValue').textContent = '';
});

submitTrailersButton.addEventListener('click', async function (e) {
    e.preventDefault();
    const response = await fetch('/api/trailers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trailers }),
    });

    if (response.ok) {
        alert('Trailers submitted successfully!');
        trailers.length = 0;
        trailersList.innerHTML = '';
        trailerListContainer.classList.add('hidden');
    } else {
        alert('Error submitting trailers');
    }
});
