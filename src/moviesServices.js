// 1st  solution
// const fs = require('fs');

// const readMovies = () => {
//   const moviesData = fs.readFileSync('./movies.json');
//   return JSON.parse(moviesData);
// };

// module.exports = {
//   readMovies,
// };


// 2nd solution
// const fs = require('fs');

// const getMovies = (callback) => {
//   fs.readFile('./movies.json', (err, data) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       const movies = JSON.parse(data);
//       callback(null, movies);
//     }
//   });
// }

// module.exports = {
//   getMovies,
// };

// 3rd solution
// const fs = require('fs');

// const getMovies = () => {
//   const movies = JSON.parse(fs.readFileSync('movies.json'));
//   return movies;
// }

// module.exports = {
//   getMovies,
// };

// 4th solution
// const fs = require('fs');
// const path = require('path');

// const getMovies = () => {
//   const filePath = path.join(__dirname, 'movies.json');
//   const movies = JSON.parse(fs.readFileSync(filePath));
//   return movies;
// }

// module.exports = {
//   getMovies,
// };

// 5th solution
const fs = require('fs');
const path = require('path');

const getMovies = () => {
  const filePath = path.join(__dirname, 'movies.json');
  const movies = JSON.parse(fs.readFileSync(filePath));
  const jsonHtml = `<pre>${JSON.stringify(movies, null, 2)}</pre>`;
  return jsonHtml;
}

module.exports = {
  getMovies,
};
