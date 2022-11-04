const elScienceNewsList = document.querySelector(".science-news-list");

async function ScienceList() {
    
    try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?category=science&apiKey=${keyFetch}`);
        const data = await res.json();
        const arr = data.articles
        showNews(arr, elScienceNewsList)
    } catch (error) {
        console.log(error);
    }
    
}

ScienceList()