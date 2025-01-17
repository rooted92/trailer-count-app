const trailerList = document.getElementById('allTrailersList');
const trailerType = document.getElementById('trailerType');
const trailerLocation = document.getElementById('trailerLocation');

let currentFilters = {
    type: 'all',
    location: 'all',
}

async function applyFilters() {
    const {type, location} = currentFilters;

    const response = await fetch('api/all-trailers');
    const trailers = await response.json();

    let filteredTrailers = type === 'all' ? trailers : trailers.filter(trailer => trailer.trailerType === type);

    if(location !== 'all') {
        filteredTrailers = filteredTrailers.filter(trailer => trailer.currentLocation === location);
    }

    trailerList.innerHTML = '';
    buildTrailerListItems(filteredTrailers);
}

trailerType.addEventListener('change', (e) => {
    currentFilters.type = e.target.value;
    applyFilters();
});

trailerLocation.addEventListener('change', (e) => {
    currentFilters.location = e.target.value;
    applyFilters();
});

async function buildTrailerListItems(trailerArray) {
    return trailerArray.forEach(trailer => {
        trailerList.innerHTML += `
        <a href="/trailer/${trailer._id}" rel="noopener noreferrer">
            <div class="bg-white hover:bg-slate-100 hover:scale-105 hover:scale shadow-md rounded-lg overflow-hidden transition-all ease-in">
                <div class="p-4 flex flex-col xs:flex-row justify-between items-start">
                    <div class="flex flex-col gap-1 items-start">
                        <h2 class="text-xl font-bold">
                            ${trailer.number}
                        </h2>
                        <p class="text-gray-700 capitalize">
                            ${trailer.trailerType}
                        </p>
                    </div>
                    <p class="text-gray-700 font-semibold text-sm">
                        ${trailer.currentLocation}
                    </p>
                </div>
            </div>
        </a>
        `;
    });
}