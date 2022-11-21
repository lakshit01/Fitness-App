export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7f15c37e05msh53003bc0861a35cp16076bjsn6a4c15cf2f64',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '7f15c37e05msh53003bc0861a35cp16076bjsn6a4c15cf2f64',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
