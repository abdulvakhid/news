
const elHealthNewsList = document.querySelector(".health-news-list");

async function healthList() {
    
    try {
        const healthRes = await fetch(`https://newsapi.org/v2/top-headlines?category=health&apiKey=${keyFetch}`);
        const healthData = await healthRes.json();
        const newsArrHealth = healthData.articles
        showNews(newsArrHealth, elHealthNewsList)
    } catch (error) {
        console.log(error);
    }
    
}

healthList()