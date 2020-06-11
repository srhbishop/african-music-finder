const resultsContainer = document.querySelector('.results-container');
const submitBtn = document.querySelector('.submit-btn');

/* make an array of YOUTUBE htmls */

const youtubeArray = [
    'https://www.youtube.com/embed/XyNE1hKBbVU',
    'https://www.youtube.com/embed/6rTbrDlp6xk',
    'https://www.youtube.com/embed/VzEOkkceIGQ',
    'https://www.youtube.com/embed/YNThM5A0IVI',
    'https://www.youtube.com/embed/lEJw64Zl28U',
    'https://www.youtube.com/embed/7nhn1jmGocY',
    'https://www.youtube.com/embed/6ode6imhNKQ',
    'https://www.youtube.com/embed/LkVe0cyqHjo',
    'https://www.youtube.com/embed/M8352gNiEb0'
]


submitBtn.addEventListener('click', function(event) {
    event.preventDefault();

    /* randomize HTMLs on button click */
    var randomSong = youtubeArray[Math.floor(Math.random() * youtubeArray.length)];

    console.log(randomSong);

    /* print randomly-generated HTMLs to DOM */
    resultsContainer.innerHTML = `
        <iframe width="560" height="315" src="${randomSong}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    resultsContainer.classList.add('active');
})