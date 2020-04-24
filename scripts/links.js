const myLikes = document.querySelector('main .my-likes'),
    h1 = document.querySelector('main p');
let colorData = JSON.parse(localStorage.getItem('ids'));

for (const i of colorData) {
    
    for (const item of allColor) {
        
        if (item.id === parseInt(i)) {
            newItem(item.id, item.allColor);
        }

    }

}

function newItem(id, color) {
    
    const item = document.createElement('div'),
        span1 = document.createElement('span'),
        span2 = document.createElement('span'),
        span3 = document.createElement('span'),
        span4 = document.createElement('span'),
        a = document.createElement('a');

    item.classList.add('item');

    span1.style.background = color[0];
    span2.style.background = color[1];
    span3.style.background = color[2];
    span4.style.background = color[3];

    a.setAttribute('href', `SelectColor.html?id=${id}`);


    item.appendChild(span1);
    item.appendChild(span2);
    item.appendChild(span3);
    item.appendChild(span4);
    item.appendChild(a);

    myLikes.appendChild(item);

    h1.innerHTML = `You Liked ${myLikes.childElementCount} Palettes`;

}