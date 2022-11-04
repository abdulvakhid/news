 const keyFetch = "272967df12b64dd98a2adb7b8ae9dd03";
 const elList = document.querySelector(".list");
 const elAsiaList = document.querySelector(".asia-list");
 const elBtn = document.querySelector(".js-more-load");
 
 
 const elTemplate = document.querySelector(".template").content;
 //  const elAsiaTemplate = document.querySelector(".asia-template").content;
 
 
 function showNews(array, list) {
    // elList.innerHTML = "";
    const newFragment = document.createDocumentFragment();
    
    array.forEach(item => {
        
        const templateCloned = elTemplate.cloneNode(true);
        
        templateCloned.querySelector(".news-title").textContent = item.title;
        templateCloned.querySelector(".news-img").src = item.urlToImage;
        templateCloned.querySelector(".news-time").textContent = item.publishedAt;
        templateCloned.querySelector(".news-link").href = item.url;
        
        newFragment.appendChild(templateCloned);
    })
    list.appendChild(newFragment)
}

let apiLink = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${keyFetch}`;
async function showFetchNews(url) {
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        const articles = data.articles
        //  console.log(articles);
        showNews(articles, elList);
        
    } catch (error) {
        console.log(error);
    }
}

showFetchNews(apiLink);



async function showAsiaNews() {
    
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=ru&apiKey=${keyFetch}`);
        const data = await response.json();
        const newsArr = data.articles
        showNews(newsArr, elAsiaList)
    } catch (error) {
        console.log(error);
    }
    
}

showAsiaNews()


let num = 1;
elBtn.addEventListener("click", function () {
    ++num
    let pgLink = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${keyFetch}&page=${num}`
    showFetchNews(pgLink);
})



// let gettoken = window.localStorage.getItem("maintoken", data.token)

// if(!tokenmain){
//     window.location.reload()
//     window.location.pathname = "login.html"
// }