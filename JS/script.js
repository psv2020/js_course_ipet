// **********************петриченко 12 урок

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMouveDb = {
    count: numberOfFilms,
    movies: {},    
    actors: {},
    genres: [],
    privat: false
};   

// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt("На сколько его оцениваете?",""),
//       c = prompt("Один из последних просмотренных фильмов?",""),
//       d = prompt("На сколько его оцениваете?","");

// personalMouveDb.movies[a] = b;
// personalMouveDb.movies[c] = d;

// console.log(personalMouveDb);

// *************************** петриченко 15 урок

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// for (let i = i; i <= numberOfFilms; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?',''),
//           b = prompt("На сколько его оцениваете?","");
    
//     if (a != '' && b !='' && a != null && b != null && a.length < 50) {
//        personalMouveDb.movies[a] = b;
//     } else {
//         i--;
//     }
// }
// if (numberOfFilms<10) {
//    console.log('просмотрено довольно мало фильмов');
// } else if (numberOfFilms >=10 && numberOfFilms<30) {
//     console.log('вы классический зритель');
// } else if (numberOfFilms >=30) {
//     console.log('вы киноман');
// } else {
//     console.log('произошла ошибка');
// }    
// ********************петриченко 18 урок
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while(numberOfFilms ==''|| numberOfFilms ==null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

function showMyDb() {
    if (personalMouveDb[privat] == false) {
        console.log(this);
    } 
}
// решение петриченко
function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMouveDb);
    } 
}
showMyDb(personalMouveDb.privat)
// закончено

let genres = []

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
            const a = prompt(`Любимый жанр под номером ${i}`);
            personalMouveDb[i - 1] = a;             
        }
}
writeYourGenres()

function writeYourGenres_1() {
    for (let i = 1; i <= 3; i++) {
            personalMouveDb[i - 1] = prompt(`Любимый жанр под номером ${i}`);
        }
}