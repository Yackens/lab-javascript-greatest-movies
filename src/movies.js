// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(item => item.director);
}

function uniqueDirectors(moviesArray) {
    const unArray = [];
    moviesArray.forEach(word => {if (unArray.includes(word) === false) {
    unArray.push(word)
  }});
  return unArray;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenMovies = moviesArray.filter(movie => movie.director === "Steven Spielberg");
    const stevenDramaMovies = stevenMovies.filter(movie => movie.genre.includes("Drama"));
    return stevenDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }

      const scores = moviesArray.map(item => item.score || 0);
      const scoreSum = scores.reduce((acc, score) => acc + score, 0);
      const scoreAvg = scoreSum / moviesArray.length;
      const finalScore = Math.round(scoreAvg * 100) / 100;
      return finalScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));

  if (dramaMovies.length === 0) {
    return 0;
  }

  const onlyScore = dramaMovies.map(movie => movie.score);
  const dramaMoviesScore = onlyScore.reduce((acc, score) => acc + score, 0);
  const scoreAvg = dramaMoviesScore / dramaMovies.length;
  return scoreAvg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const yearSorted = moviesArray.slice().sort((a, b) => {
    if (a.year !== b.year) {
        return a.year-b.year;
    } else {
        return a.title.localeCompare(b.title);
    }
    });
    return yearSorted;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphaSorted = moviesArray.slice().sort((a, b) =>a.title.localeCompare(b.title));
    const alphaArray = alphaSorted.map(value=>value.title);
    return alphaArray.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const convertedMovies = moviesArray.map(movie => {
        let { duration } = movie;
    
        if (duration.includes("h") && duration.includes("min")) {
            const [hours, min] = duration.slice().split("h").map(time => parseInt(time));
            duration = hours* 60 + min;
        }

        else if (duration.includes("min")) {
            duration = parseInt(duration);
        }

        else if (duration.includes("h")) {
            duration = parseInt(duration) * 60;

        }
        else {
            return 0;
        }
        return {movie, duration} });
    return convertedMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
