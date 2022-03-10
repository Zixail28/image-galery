// https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=X1XMDYMd1bPgOq_u_cP63DsGOiPhTVcDDyy1VZ-jrjQ

const searchBtn = document.querySelector('.fa-search');
const grid = document.querySelector('.grid');
const input = document.querySelector('.input');
let imgs = [];

searchBtn.addEventListener('click', getImgs);

function getImgs() {
	grid.textContent = '';
	fetch(`https://api.unsplash.com/search/photos?query=${input.value}&per_page=30&orientation=landscape&client_id=X1XMDYMd1bPgOq_u_cP63DsGOiPhTVcDDyy1VZ-jrjQ`)
	.then((res) => res.json())
	.then((data) => {
		  data.results.map((value) => {
			const img = document.createElement('img');
			img.classList.add('imgs')
			img.src = `${value.urls.small}`;
			img.alt = `image`;
			grid.append(img);
		})
		imgs = document.querySelectorAll('.imgs');
		imgs.forEach(element => element.addEventListener('click', () => window.open(`${element.getAttribute('src')}`, '_blank')))
	})
};

