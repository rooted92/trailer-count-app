const trailerList = document.getElementById('trailerList');
const trailerType = document.getElementById('trailerType');

trailerType.addEventListener('change', async (e) => {
    const type = e.target.value;

    if (type === 'dryvan') {
        trailerList.innerHTML = '';
        const dryvans = await getDryvans();
        buildTrailerListItems(dryvans);
    } else if (type === 'reefers') {

    } else if (type === 'tankers') {

    } else {

    }

});

async function getDryvans() {
    const response = await fetch('/api/all-trailers');
    const data = await response.json();
    const dryvans = data.filter(trailer => trailer.trailerType === 'dryvan');
    return dryvans;
}

async function getReefers() {
    const response = await fetch('/api/all-trailers');
    const data = await response.json();
    return data;
}

async function getTankers() {
    const response = await fetch('/api/all-trailers');
    const data = await response.json();
    return
}

async function getFilteredTrailers(typeOfTrailer = 'all') {
    const response = await fetch('/api/all-trailers');
    const trailers = await response.json();
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