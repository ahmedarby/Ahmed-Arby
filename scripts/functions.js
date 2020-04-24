let allColor = [
    {
        id: 1456445,
        allColor: [
            '#282828',
            '#00dd39',
            '#dd0000',
            '#008ee5'
        ],
        likes: 854,
        time: 'Today'
    },
    {
        id: 5645,
        allColor: [
            '#e2e2e2',
            '#dd169f',
            '#0028dd',
            '#3de500'
        ],
        likes: 4,
        time: '3 Month'
    },
    {
        id: 14,
        allColor: [
            '#da0588',
            '#dcdd07',
            '#8b08dd',
            '#e5cd03'
        ],
        likes: '1234',
        time: '1 Day'
    },
    {
        id: 897645,
        allColor: [
            '#8b08dd',
            '#dd169f',
            '#00ff05',
            '#e55000'
        ],
        likes: '3504',
        time: 'Today'
    },
    {
        id: 456645,
        allColor: [
            '#86501e',
            '#dd0487',
            '#ff893d',
            '#dce567'
        ],
        likes: 854,
        time: '5 Month'
    },
    {
        id: 1645,
        allColor: [
            '#280d05',
            '#b601dd',
            '#99dd14',
            '#e51800'
        ],
        likes: '5600',
        time: '6 Month'
    },
    {
        id: 1456645,
        allColor: [
            '#282708',
            '#dd0382',
            '#ddd5d5',
            '#008ee5'
        ],
        likes: 33,
        time: '3 Day'
    },
    {
        id: 145,
        allColor: [
            '#280d03',
            '#6ddd0f',
            '#dd6b1a',
            '#e3e5a8'
        ],
        likes: 0,
        time: 'Today'
    },
    {
        id: 5,
        allColor: [
            '#a34d6a',
            '#6a2c39',
            '#d744dd',
            '#86501e'
        ],
        likes: 3,
        time: '7 Day'
    },
    {
        id: 172545,
        allColor: [
            '#790c5a',
            '#dce567',
            '#008ee5',
            '#c974e5'
        ],
        likes: 40,
        time: '20 Day'
    },
    {
        id: 72545,
        allColor: [
            '#f0f0f0',
            '#860e0e',
            '#f2c0c0',
            '#0660c6'
        ],
        likes: 20,
        time: '2 Day'
    },
    {
        id: 545,
        allColor: [
            '#3305d6',
            '#52a206',
            '#06a2a2',
            '#a2063d'
        ],
        likes: 12,
        time: '2 Month'
    },
    {
        id: 725,
        allColor: [
            '#0065b3',
            '#f1f8fe',
            '#36a603',
            '#8c51fb'
        ],
        likes: 7010,
        time: '1 Day'
    },
    {
        id: 72015,
        allColor: [
            '#8155d3',
            '#f2ebfe',
            '#1e1d20',
            '#b904a4'
        ],
        likes: 7120,
        time: 'Today'
    },
    {
        id: 75,
        allColor: [
            '#1c0d1a',
            '#080930',
            '#2dc403',
            '#03c4c4'
        ],
        likes: 720,
        time: 'Today'
    },
    {
        id: 45645,
        allColor: [
            '#35edd5',
            '#181698',
            '#dec8e0',
            '#360e39'
        ],
        likes: 70,
        time: 'Today'
    },
    {
        id: 40045,
        allColor: [
            '#39f524',
            '#facf8e',
            '#ffffff',
            '#1b1a18'
        ],
        likes: 12,
        time: '2 Day'
    },
    {
        id: 4456465,
        allColor: [
            '#08f728',
            '#0a0963',
            '#34328f',
            '#0d2612'
        ],
        likes: 301,
        time: '10 Day'
    },
    {
        id: 4010045,
        allColor: [
            '#7608a6',
            '#1895fb',
            '#4109aa',
            '#70055b'
        ],
        likes: 122,
        time: '1 Month'
    },
    {
        id: 454545,
        allColor: [
            '#cd0e0e',
            '#0e0ecd',
            '#cd0e9a',
            '#ba9503'
        ],
        likes: 1122,
        time: '1 Month'
    },
    {
        id: 01240,
        allColor: [
            '#fefcf6',
            '#c29c05',
            '#362c02',
            '#0797d5'
        ],
        likes: 122,
        time: '1 Month'
    }
];
let data = JSON.parse(localStorage.getItem('ids'));

function createMainColor(allColor, idItem, likes, myTime) {

    const container = document.createElement('div'),
        color = document.createElement('div'),
        span1 = document.createElement('span'),
        span2 = document.createElement('span'),
        span3 = document.createElement('span'),
        span4 = document.createElement('span'),
        bottom = document.createElement('div'),
        like = document.createElement('div'),
        time = document.createElement('div');

    // Add class
    container.classList.add('item');
    color.classList.add('color');
    bottom.classList.add('bottom');
    like.classList.add('like');
    time.classList.add('time');

    // Add text
    span1.innerHTML = `
    <h1>${allColor[0]}</h1>
    <a href="SelectColor.html?id=${idItem}"></a>`;
    span2.innerHTML = `
    <h1>${allColor[1]}</h1>
    <a href="SelectColor.html?id=${idItem}"></a>`;
    span3.innerHTML = `
    <h1>${allColor[2]}</h1>
    <a href="SelectColor.html?id=${idItem}"></a>`;
    span4.innerHTML = `
    <h1>${allColor[3]}</h1>
    <a href="SelectColor.html?id=${idItem}"></a>`;
    like.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.17936 8.16669"><defs><style>.cls-1{fill:#3a4249;}</style></defs><title>ic_heart</title><g id="Layer_2"><g id="Home"><path class="cls-1" d="M8.45116.79922A2.4683,2.4683,0,0,0,6.61511,0,2.30927,2.30927,0,0,0,5.17278.49786a2.951,2.951,0,0,0-.5831.60887A2.94936,2.94936,0,0,0,4.00652.49786,2.30894,2.30894,0,0,0,2.56426,0,2.46847,2.46847,0,0,0,.72813.79922,2.86928,2.86928,0,0,0,0,2.75867,3.41661,3.41661,0,0,0,.91043,4.9951a19.41256,19.41256,0,0,0,2.279,2.13909c.31578.26914.67372.5742,1.04539.89915a.53885.53885,0,0,0,.70957.00014c.37166-.325.72981-.63022,1.04573-.8995A19.4039,19.4039,0,0,0,8.269,4.995,3.41623,3.41623,0,0,0,9.17936,2.7586,2.869,2.869,0,0,0,8.45116.79922Z"/></g></g></svg>
    ${likes}`;
    time.innerHTML = `
    <h1>${myTime}</h1>`;

    // Add color
    span1.style.background = allColor[0];
    span2.style.background = allColor[1];
    span3.style.background = allColor[2];
    span4.style.background = allColor[3];

    // Append together
    color.appendChild(span1);
    color.appendChild(span2);
    color.appendChild(span3);
    color.appendChild(span4);
    bottom.appendChild(like);
    bottom.appendChild(time);

    container.appendChild(color);
    container.appendChild(bottom);

    // Add on click
    like.onclick = () => {
        like.classList.toggle('active-like')
        createLikesItem(idItem, allColor);
        updateLikes();
    };

    if (data !== null) {
        
        let same = data.filter((e) => e == idItem);
        if (same.length > 0) {
            like.classList.toggle('active-like')
            createLikesItem(idItem, allColor);
        }

    }

    // Append to main
    main.appendChild(container);

}

function createLikesItem(id, color) {

    const item = document.createElement('div'),
        close = document.createElement('div'),
        span1 = document.createElement('span'),
        span2 = document.createElement('span'),
        span3 = document.createElement('span'),
        span4 = document.createElement('span'),
        a = document.createElement('a');

    // Add classes
    item.classList.add('item');
    close.classList.add('close');

    // Add attributes
    a.setAttribute('href', `SelectColor.html?id=${id}`);

    // Add style
    span1.style.background = color[0];
    span2.style.background = color[1];
    span3.style.background = color[2];
    span4.style.background = color[3];

    // Append together
    item.appendChild(close);
    item.appendChild(span1);
    item.appendChild(span2);
    item.appendChild(span3);
    item.appendChild(span4);
    item.appendChild(a);

    close.onclick = function () {
        noLike(id);
        likesList.removeChild(this.parentElement);
        document.querySelector('aside h1')
            .innerHTML = `You like ${likesList.childElementCount} palettes`;
        updateLikes();
    };

    if (checkLikeList(id)) {
        likesList.insertBefore(item, likesList.firstElementChild);
    }

    document.querySelector('aside h1')
        .innerHTML = `You like ${likesList.childElementCount} palettes`;

}

function checkLikeList(id) {

    const children = likesList.children;

    for (let i of children) {

        let href = i.children.item(5).getAttribute('href').toString();
        let result = href.substring(href.indexOf('?') + 4);

        if (id === parseInt(result)) {
            likesList.removeChild(i);
            return false;
        }
        
    }

    return  true;
}

function noLike(id) {

    const children = main.children;

    for (let i of children) {

        let href = i.children.item(0).children.item(0)
            .children.item(1).getAttribute('href').toString();
        let result = href.substring(href.indexOf('?') + 4);

        if (id === parseInt(result)) {
            const likeBtn = i.children.item(1).children.item(0);
            likeBtn.classList.remove('active-like');
        }

    }

}

function getLikes() {
    
    const child = likesList.children;
    let ids = [];

    for (const item of child) {
        let href = item.children.item(5).getAttribute('href');
        let result = href.substring(href.indexOf('?') + 4);

        ids.push(result);
    }

    return JSON.stringify(ids);
}

function updateLikes() {
    localStorage.setItem('ids', getLikes());
}