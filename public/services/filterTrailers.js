const trailerList = document.getElementById('allTrailersList');
const trailerType = document.getElementById('trailerType');

trailerType.addEventListener('change', async (e) => {
    const type = e.target.value;
    console.log(type);
    if (type === 'dryvan') {
        trailerList.innerHTML = '';
        const dryvans = await getFilteredTrailers(type);
        buildTrailerListItems(dryvans);
    } else if (type === 'reefer') {
        trailerList.innerHTML = '';
        const reefers = await getFilteredTrailers(type);
        console.log(reefers)
        buildTrailerListItems(reefers);
    } else if (type === 'tanker') {
        trailerList.innerHTML = '';
        const tankers = await getFilteredTrailers(type);
        console.log(tankers);
        buildTrailerListItems(tankers);
    } else {
        trailerList.innerHTML = '';
        const allTrailers = await getFilteredTrailers();
        console.log(allTrailers);
        buildTrailerListItems(allTrailers);
    }

});

async function getFilteredTrailers(typeOfTrailer = 'all') {
    const response = await fetch('/api/all-trailers');
    const trailers = await response.json();
    console.log('Type value in filtered trailers function: ', typeOfTrailer);
    return typeOfTrailer === 'all' ? trailers : trailers.filter(trailer => trailer.trailerType === typeOfTrailer)
}

async function buildTrailerListItems(trailerArray) {
        return trailerArray.forEach(trailer => {
        trailerList.innerHTML += `
    <a href="/trailer/${trailer._id}" rel="noopener noreferrer">
        <div class="bg-white hover:bg-slate-100 hover:scale-105 hover:scale shadow-md rounded-lg overflow-hidden transition-all ease-in">
          <div class="p-4">
            <h2 class="text-xl font-bold">
              ${trailer.number}
            </h2>
            <p class="text-gray-700 capitalize">
              ${trailer.trailerType}
            </p>
          </div>
        </div>
    </a>
        `;
    });
}