export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    //Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDFkNzQzMzk2ODE0YWEyMzk3ZDQ3ZWI4ODBlMDVkYSIsIm5iZiI6MTcyNTk2NDE1Mi41ODc0MDcsInN1YiI6IjY2ZGZmYjBmMDAwMDAwMDAwMDU4ODI3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DGC8uPuhINagRIpdXucmO7Jedi8yAOvuoo_dnquRs3o'
    Authorization : "Bearer " + process.env.REACT_APP_TMDB_KEY,
    //space is needed after bearer
  },
};

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const GEMINIAI_KEY = process.env.REACT_APP_GEMINIAI_KEY;
