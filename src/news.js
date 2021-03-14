const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=9ab3b6d0db604bb59953268557b99aff";

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
  }