/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


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
document.querySelector('.promo__bg').style.cssText = `background-image: url('img/bg.jpg')`;

// 4 + 5
let watchedFilms = document.querySelector('.promo__interactive-list');
watchedFilms.innerHTML = "";

let filmArr = [...movieDB.movies];
filmArr.sort();

filmArr.forEach((movie, i) => {
    let actual_movie =
        `<li class ="promo__interactive-item">${i + 1}. ${movie}
            <div class="delete"></div> 
        </li>`;
    watchedFilms.insertAdjacentHTML('beforeend', actual_movie);
});
