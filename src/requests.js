const API_KEY = '<dd3020e88bcd84f52a9aa7ad82273a7a>';

export default {
    fetchTrending: `trending/all/day?api_key=dd3020e88bcd84f52a9aa7ad82273a7a`,
    fetchTopRated: `movie/top_rated?api_key=dd3020e88bcd84f52a9aa7ad82273a7a&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie?api_key=dd3020e88bcd84f52a9aa7ad82273a7a&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=dd3020e88bcd84f52a9aa7ad82273a7a&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=dd3020e88bcd84f52a9aa7ad82273a7a&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=dd3020e88bcd84f52a9aa7ad82273a7a&with_genres=10749`,
    fetchMystery: `/discover/movie?api_key=dd3020e88bcd84f52a9aa7ad82273a7a&with_genres=9648`,
    fetchSciFi: `/discover/movie?api_key=dd3020e88bcd84f52a9aa7ad82273a7a&with_genres=878`,
    fetchWestern: `/discover/movie?api_key=dd3020e88bcd84f52a9aa7ad82273a7a&with_genres=37`,
    fetchAnimation: `/discover/movie?api_key=dd3020e88bcd84f52a9aa7ad82273a7a&with_genres=16`,
    fetchTV: `/discover/movie?api_key=dd3020e88bcd84f52a9aa7ad82273a7a&with_genres=27`,
};

