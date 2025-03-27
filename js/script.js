/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Жуки",
    ]
};

//1
const promoSection = document.querySelector('.promo__adv');
const promoImgs = promoSection.querySelectorAll('img');
promoImgs.forEach(element => {
    element.remove();
});

console.log(promoImgs);
//2 
document.querySelector('.promo__genre').innerHTML = "Драма";

// 3
document.querySelector('.promo__bg').style.cssText = `background-image: url('../img/bg.jpg')`;

// 4 + 5
let watchedFilms = document.querySelector('.promo__interactive-list');

watchedFilms.style.cssText = `list-style-type: decimal`;
watchedFilms.outerHTML = watchedFilms.outerHTML.replace('<ul', '<ol').replace('ul>', 'ol>');
watchedFilms = document.querySelector('.promo__interactive-list');


watchedFilms.querySelectorAll('li').forEach(element => {
    element.remove();
});

let filmArr = [...movieDB.movies];
debugger
filmArr = filmArr.sort();
filmArr.forEach(movie => {

    let actual_movie = `<li class ="promo__interactive-item" style="display: list-item;">${movie}</li>`;
    watchedFilms.insertAdjacentHTML('beforeend', actual_movie);
});
