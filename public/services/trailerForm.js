const trailers = [];
const trailerForm = document.getElementById('trailerForm');
const trailerListContainer = document.getElementById('submitTrailersList');
const trailersList = document.getElementById('trailers');
const addTrailerButton = document.getElementById('addTrailer');
const submitTrailersButton = document.getElementById('submitTrailers');
const errorMessage = document.getElementById('errorMessage');

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
        loaded: document.querySelector('input[name="loaded"]:checked')?.value || null,
        driverNotes: document.getElementById('driverNotes').value,
        fuelLevel: document.getElementById('fuelLevelContainer').classList.contains('hidden')
            ? null
            : parseInt(document.getElementById('fuelLevel').value, 10),
        currentLocation: document.getElementById('yardLocation').value,
    };

    console.log(trailerData);

    if (!trailerData.trailerType) {
        errorMessage.textContent = 'Trailer type is required';
        errorMessage.classList.remove('hidden');
        return;
    } else if (!trailerData.number) {
        errorMessage.textContent = 'Trailer number is required';
        errorMessage.classList.remove('hidden');
        return;
    } else if (!trailerData.condition) {
        errorMessage.textContent = 'Trailer condition is required';
        errorMessage.classList.remove('hidden');
        return;
    } else if (trailerData.trailerType === 'reefer' && !trailerData.fuelLevel) {
        errorMessage.textContent = 'Fuel level is required for Reefer trailers';
        errorMessage.classList.remove('hidden');
        return;
    } else if (!trailerData.loaded) {
        errorMessage.textContent = 'Please specify if the trailer is loaded or empty';
        errorMessage.classList.remove('hidden');
        return;
    } else if (!trailerData.currentLocation) {
        errorMessage.textContent = 'Current location is required';
        errorMessage.classList.remove('hidden');
        return;
    }

    trailerData.loaded = trailerData.loaded === 'loaded'

    trailers.push(trailerData);
    console.log(trailers);

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <p>
            <span class="font-bold text-xl">${trailerData.number}</span> -
            <span class="text-gray-600 capitalize">${trailerData.trailerType}</span>
        </p>
        <div class="flex gap-2">
            <span class="mr-2 text-sm capitalize">${trailerData.condition}</span>
            <span class="mr-2 text-sm">${trailerData.loaded ? 'Loaded' : 'Empty'}</span>
        </div>

        <p class="mr-2">${trailerData.currentLocation}</p>
        <div class="flex gap-4">
            <button class="text-red-600">Remove</button>
            <button class="text-slate-700">Edit</button>
        </div>
    `;
    listItem.className = 'list-none px-4 py-2 font-semibold bg-slate-100 border border-gray-300 rounded-md';
    trailersList.appendChild(listItem);

    listItem.querySelector('.text-red-600').addEventListener('click', function () {
        const index = trailers.findIndex(trailer => trailer.number = trailerData.number);
        if (index > -1) {
            trailers.splice(index, 1);
            listItem.remove();
        }
        if (trailers.length === 0) {
            trailerListContainer.classList.add('hidden');
        }
        console.log(trailers);
    });

    listItem.querySelector('.text-slate-700').addEventListener('click', function () {
        document.getElementById('trailerType').value = trailerData.trailerType;
        document.getElementById('condition').value = trailerData.condition;
        document.getElementById('number').value = trailerData.number;
        document.querySelector(`input[name="loaded"][value="${trailerData.loaded ? 'loaded' : 'empty'}"]`).checked = true;
        document.getElementById('driverNotes').value = trailerData.driverNotes || '';
        document.getElementById('fuelLevel').value = trailerData.fuelLevel || 0;
        document.getElementById('fuelLevelValue').textContent = trailerData.fuelLevel ? trailerData.fuelLevel + '%' : '';
        document.getElementById('yardLocation').value = trailerData.currentLocation;

        const index = trailers.findIndex(t => t.number === trailerData.number);
        if (index > -1) {
            trailers.splice(index, 1);
            listItem.remove();
        }
    });

    trailerListContainer.classList.remove('hidden');

    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');

    trailerForm.reset();
    document.getElementById('yardLocation').value = yardLocation;
    document.getElementById('fuelLevelValue').textContent = '';
});

submitTrailersButton.addEventListener('click', async function (e) {
    e.preventDefault();

    try {
        const response = await fetch('/api/trailers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ trailers }),
        });

        const data = await response.json();

        if (response.ok) {
            trailers.length = 0;
            trailersList.innerHTML = '';
            trailerListContainer.classList.add('hidden');
            errorMessage.textContent = '';
            errorMessage.classList.add('hidden');
            window.location.href = '/success';
        } else {
            errorMessage.textContent = data.message;
            errorMessage.classList.remove('hidden');
        }
    } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.classList.remove('hidden');
    }
});