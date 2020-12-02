const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMouveDb = {
    count: numberOfFilms,
    movies: {},    
    actors: {},
    genres: [],
    privat: false
};   

const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt("На сколько его оцениваете?",""),
      c = prompt("Один из последних просмотренных фильмов?",""),
      d = prompt("На сколько его оцениваете?","");

personalMouveDb.movies[a] = b;
personalMouveDb.movies[c] = d;

console.log(personalMouveDb);
