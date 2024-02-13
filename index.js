
const Movie_1 = function(props) {
    // Стили для изображения
    const imageStyle = {
        width: '50%', 
        height: 'auto',
    };
    // Стили для текста даты
    const dateStyle = {
        fontSize: '20pt', // Размер шрифта даты
    };

    return React.createElement('div', {},
        React.createElement('h2', {}, props.name),
        React.createElement('p', { style: dateStyle }, props.year), // Применение стилей к тексту даты
        React.createElement('img', { src: props.image, style: imageStyle }) // Применение стилей к изображению
    );
};
const App_1 = function() {
    return React.createElement('div', null,
        React.createElement('h1', { id: 'one', className: 'clname1' }, 'Страна Россия'),
        React.createElement(Movie_1, { name: 'Мой город Вологда' }),
        React.createElement(Movie_1, { name: 'Дата основания', year: 1147 }),
        React.createElement(Movie_1, { image: '1649140449_97-vsegda-pomnim-com-p-priroda-vologodskoi-oblasti-foto-100.jpg'}),
        React.createElement(Movie_1, { image: 'musei-krugeva.jpg'}),
        React.createElement(Movie_1, { image: 'voyazh.jpg'}),
        React.createElement(Movie_1, { image: '412555_original.jpg'}),
        React.createElement(Movie_1, { image: '1799506_1000.jpg' })
    );
};
ReactDOM.render(React.createElement(App_1), document.getElementById('root'));
