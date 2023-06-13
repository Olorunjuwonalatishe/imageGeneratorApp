window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    // header.style.backgroundColor = 'blue'
    header.classList.toggle('sticky', window.scrollY > 3)
})

const grid = document.querySelector('.grid')
const input = document.querySelector('input')
console.log(input.value);

const img = document.getElementById('image')
console.log(img);

input.addEventListener('change', (e) => {
    const inputValue = e.target.value
    const url = `https://api.unsplash.com/search/photos/?query=${inputValue}&per_page=50&client_id=-pbSLvOYlJWtEOKPuqX5WhG40iodVrVw5Yux3OOO_50`
    async function getData() {
        const response = await fetch(url)
        const data = await response.json();
        console.log(data);
        const items = data.results
        items.map((item) => {
            console.log(item);
            const image = document.createElement('img')
            image.src = item.urls.raw
            grid.append(image)
        })

    }
    getData()
})

