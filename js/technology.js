const elTechNewsList = document.querySelector(".tech-news-list");

async function techList() {
    
    try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=${keyFetch}`);
        const data = await res.json();
        const arra = data.articles
        showNews(arra, elTechNewsList)
    } catch (error) {
        console.log(error);
    }
    
}

techList()