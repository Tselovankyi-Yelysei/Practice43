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

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
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
    // watchedFilms.style.cssText = `list-style-type: decimal`;
    // watchedFilms = document.querySelector('.promo__interactive-list');

    updateFilmList();

    function updateFilmList() {
        watchedFilms.innerHTML = "";
        movieDB.movies.sort();
        movieDB.movies.forEach((movie, i) => {
            let actual_movie =
                `<li class ="promo__interactive-item">${i + 1}. ${movie}
                     <div class="delete"></div> 
                 </li>`;

            watchedFilms.insertAdjacentHTML('beforeend', actual_movie);
        });
        updateDeleteButtons();
    };

    //----
    //1 + 2
    const addButton = document.querySelector('.add > button');
    const addInputField = document.querySelector('.adding__input');
    const addCheckbox = document.querySelector('.add > input[type = "checkbox"]');


    addButton.addEventListener('click', function (event) {
        event.preventDefault();
        let newFilm = addInputField.value;
        if (newFilm.length > 21) {
            newFilm = newFilm.slice(0, 21) + "...";
        }
        movieDB.movies.push(newFilm);
        updateFilmList();
        addInputField.value = '';

        if (addCheckbox.checked == true) {
            console.log("Добавляем любимый фильм!");
            addCheckbox.checked = false;
        }
    });

    //3
    function updateDeleteButtons() {

        const deleteButtons = document.querySelectorAll('.delete');

        deleteButtons.forEach(element => {
            element.addEventListener('click', function (event) {
                let elementParent = element.parentElement;
                let filmName = elementParent.textContent;
                filmName = filmName.slice(filmName.indexOf('.') + 1).trim();
                console.log(filmName);

                let elementIndex = movieDB.movies.findIndex(movie => movie === filmName);
                movieDB.movies.splice(elementIndex, 1);
                updateFilmList();
            })
        });
    };
});
