const b = document.getElementById('theme-button');
const h = document.getElementById('char_heading');
const image = document.getElementById('theme-char');
const t = document.getElementById('text-char');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    b.textContent = '☀';
    b.style.color = '#b49a68';
}else {
    b.textContent = '☽';
    b.style.color = '#171b20';
}

b.onclick = () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        b.textContent = '☀';
        b.style.color = '#b49a68';
        h.textContent = 'Путь';
        image.src = 'images/dark_theme_char.jpg';
        image.alt = 'Not Klein';
        t.textContent = 'Кажется, этот текст был украден :)';
        t.style.color = '#9C7635';
    }else {
        localStorage.setItem('theme', 'light');
        b.textContent = '☽';
        b.style.color = '#171b20';
        h.textContent = 'Путь главного героя';
        image.src = 'images/light_theme_char.jpg';
        image.alt = 'Klein';
        t.textContent = 'Путь, связанный с тайнами, прорицанием и гаданием. Его последователи способны распознавать знаки судьбы, используя сновидения, карты и различные предзнаменования. По мере продвижения их духовное восприятие обостряется, а память становится лучше.';
        t.style.color = '#353A3B';
    }
};

setTimeout(() => {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
   }); 
}, 5000);

function ShowDate() {
    const today = new Date();

    alert( today.toLocaleDateString("ru-RU"));
}
