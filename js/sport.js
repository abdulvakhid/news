const elSportNewsList = document.querySelector(".sport-news-list");

async function SportList() {
    
    try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?category=sports&apiKey=${keyFetch}`);
        const data = await res.json();
        const arra = data.articles
        console.log(arra);
        showNews(arra, elSportNewsList)
    } catch (error) {
        console.log(error);
    }
    
}

SportList()