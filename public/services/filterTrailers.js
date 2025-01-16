const trailerList = document.getElementById('allTrailersList');
const trailerType = document.getElementById('trailerType');
const trailerLocation = document.getElementById('trailerLocation');

trailerType.addEventListener('change', async (e) => {
    const type = e.target.value;

    if (type === 'dryvan') {
        trailerList.innerHTML = '';
        const dryvans = await getFilteredTrailers(type);
        buildTrailerListItems(dryvans);
    } else if (type === 'reefer') {
        trailerList.innerHTML = '';
        const reefers = await getFilteredTrailers(type);
        buildTrailerListItems(reefers);
    } else if (type === 'tanker') {
        trailerList.innerHTML = '';
        const tankers = await getFilteredTrailers(type);
        buildTrailerListItems(tankers);
    } else {
        trailerList.innerHTML = '';
        const allTrailers = await getFilteredTrailers();
        buildTrailerListItems(allTrailers);
    }

});

trailerLocation.addEventListener('change', async (e) => {
    const location = e.target.value;
    trailerList.innerHTML = '';
    const trailers = await getFilteredTrailersByLocation(location);
    buildTrailerListItems(trailers);
});

async function getFilteredTrailers(typeOfTrailer = 'all') {
    const response = await fetch('/api/all-trailers');
    const trailers = await response.json();
    return typeOfTrailer === 'all' ? trailers : trailers.filter(trailer => trailer.trailerType === typeOfTrailer)
}

async function getFilteredTrailersByLocation(location) {
    const response = await fetch(`/api/all-trailers/${location}`);
    const trailers = await response.json();
    console.log(trailers);
    return trailers;
}

async function buildTrailerListItems(trailerArray) {
    return trailerArray.forEach(trailer => {
        trailerList.innerHTML += `
    <a href="/trailer/${trailer._id}" rel="noopener noreferrer">
        <div class="bg-white hover:bg-slate-100 hover:scale-105 hover:scale shadow-md rounded-lg overflow-hidden transition-all ease-in">
            <div class="p-4 flex justify-between items-center">
                <div class="flex gap-4 items-center">
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