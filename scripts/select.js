const more = document.querySelector('nav #more svg'),
    h1 = document.querySelector('#sections h1'),
    likeBtn = document.querySelector('#color-selected .bottom .like'),
    main = document.querySelector('#more-color'),
    likesList = document.querySelector('aside #liked-color'),
    noItem = document.querySelector('#no-item');

let href = window.location.href;
let po = href.indexOf('?');
let id = href.substring(po + 4);


if (po !== -1) {
    h1.innerHTML = `Color Palettes ${id}`;
    setData();
} else {
    document.querySelector('aside').style.display = 'none';
    document.querySelector('main').style.display = 'none';
    window.open('Home.html', '_self');
}

if (data !== null) {

    let same = data.filter((e) => e == id);
    if (same.length > 0) {
        let object = getData();
        likeBtn.classList.add('active-like');
        createLikesItem(object.id, object.allColor);
    }

}

more.addEventListener('click', () => {
    document.querySelector('nav #more .more-options ul').classList.toggle('not-active');
});

likeBtn.onclick = () => {

    let object = getData();

    likeBtn.classList.toggle('active-like')
    createLikesItem(object.id, object.allColor);
    updateLikes();

};

for (const i of allColor) {

    if (i.id != id) {
        createMainColor(i.allColor, i.id, i.likes, i.time);
    }

}

function getData() {

    for (let i = 0; i < allColor.length; i++) {

        if (id == allColor[i].id) {
            return allColor[i];
        }

    }
    return null;
}

function setData() {

    let object = getData();

    if (object === null) {
        window.open('Home.html', '_self');
        return;
    }

    const span1 = document.querySelector('#color-selected .color span:nth-of-type(1)'),
        span2 = document.querySelector('#color-selected .color span:nth-of-type(2)'),
        span3 = document.querySelector('#color-selected .color span:nth-of-type(3)'),
        span4 = document.querySelector('#color-selected .color span:nth-of-type(4)'),
        likes = document.querySelector('#color-selected .bottom .like h1'),
        time = document.querySelector('#color-selected .bottom .time'),
        h1 = document.querySelector('#color-selected .color span:nth-of-type(1) h1'),
        h2 = document.querySelector('#color-selected .color span:nth-of-type(2) h1'),
        h3 = document.querySelector('#color-selected .color span:nth-of-type(3) h1'),
        h4 = document.querySelector('#color-selected .color span:nth-of-type(4) h1');

    span1.style.background = object.allColor[0];
    span2.style.background = object.allColor[1];
    span3.style.background = object.allColor[2];
    span4.style.background = object.allColor[3];

    h1.innerHTML = object.allColor[0];
    h2.innerHTML = object.allColor[1];
    h3.innerHTML = object.allColor[2];
    h4.innerHTML = object.allColor[3];

    likes.innerHTML = object.likes;
    time.innerHTML = object.time;

}