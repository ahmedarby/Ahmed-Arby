const pagesName = document.querySelector('#sections'),
    more = document.querySelector('nav #more svg'),
    main = document.querySelector('main'),
    likesList = document.querySelector('aside #liked-color');

pagesName.addEventListener('click', () => {
    document.querySelector('#sections ul').classList.toggle('not-active');
});
more.addEventListener('click', () => {
    document.querySelector('nav #more .more-options ul').classList.toggle('not-active');
});

for (const i of allColor) {
    createMainColor(i.allColor, i.id, i.likes, i.time);
}
