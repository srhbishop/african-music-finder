const resultsContainer = document.querySelector('.results-container');
const submitBtn = document.querySelector('.submit-btn');

const objectArray = [
    {
        name: "Daniel Soares Tavares",
        video: "https://www.youtube.com/embed/XyNE1hKBbVU",
        info: "Singer/songwriter from Guinea-Bissau, West Africa",
        link: "https://danielsoarestavares.bandcamp.com/releases"
    },

    {
        name: 'Vusi Mahlasela',
        video: 'https://www.youtube.com/embed/6rTbrDlp6xk',
        info: 'A singer/songwriter from South Africa.',
        link: 'https://en.wikipedia.org/wiki/Vusi_Mahlasela'
    },
    {
        name: 'Mdou Moctar',
        video: 'https://www.youtube.com/embed/VzEOkkceIGQ',
        info: 'A Tuareg singer, songwriter, and guitarist from Niger',
        link: 'https://en.wikipedia.org/wiki/Mdou_Moctar'
    },
    {
        name: 'Jose Chameleone',
        video: 'https://www.youtube.com/embed/YNThM5A0IVI',
        info: 'A Ugandan artist, widely known in East Africa.',
        link: 'https://en.wikipedia.org/wiki/Chameleone'
    },
    {
        name: 'Sauti Sol',
        video: 'https://www.youtube.com/embed/lEJw64Zl28U',
        info: 'One of Kenya\'s most famous bands.',
        link: 'https://en.wikipedia.org/wiki/Sauti_Sol'
    },
    {
        name: 'Sierra Leone\'s Refugee All Stars',
        video: 'https://www.youtube.com/embed/7nhn1jmGocY',
        info: 'A band formed in Guinea after being displaced by Sierra Leone\'s Civil War, now internationally famous for their music and humanitarian campaigns',
        link: `https://en.wikipedia.org/wiki/Sierra_Leone's_Refugee_All_Stars`
    },
    {
        name: 'Miriam Makeba',
        video: 'https://www.youtube.com/embed/V-YiAUi7alM',
        info: 'Known as Mama Africa, Miriam Makeba (1932-2008) was a South African artist and human rights activist.',
        link: 'https://en.wikipedia.org/wiki/Miriam_Makeba'   
    },
    {
        name: 'Alsarah & The Nubatones',
        video: 'https://www.youtube.com/embed/LkVe0cyqHjo',
        info: 'Sudanese-American artist and ethnomusicologist and her band.',
        link: 'https://en.wikipedia.org/wiki/Alsarah'
    },
    {
       name: 'Victor Uwaifo',
       video: 'https://www.youtube.com/embed/M8352gNiEb0',
       info: 'Victor Uwaifo is a Nigerian highlife musician who launched to international fame in the 1960s-70s.',
       link: 'https://en.wikipedia.org/wiki/Victor_Uwaifo' 
    }
]

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();

    /* randomize HTMLs on button click */
    var randomSong = objectArray[Math.floor(Math.random() * objectArray.length)];

    console.log(randomSong);

    /* print randomly-generated HTMLs to DOM */
    resultsContainer.innerHTML = `
        <h1>${randomSong.name}</h1>
        <p>
            ${randomSong.info}<br>
            <a href="${randomSong.link}" target="_blank">Click for more info</a>
        </p>
        <iframe width="560" height="315" src="${randomSong.video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
})