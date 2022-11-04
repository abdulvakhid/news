const elForm = document.querySelector(".form");
const elInput = elForm.querySelector(".search-input");
const searchList = document.querySelector(".search-list")

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    let inputValue = elInput.value.trim();
    
    async function searchNews(){
        try {
            const res = await fetch(`https://newsapi.org/v2/everything?q=${inputValue}&apiKey=${keyFetch}`);
            const data = await res.json();
            let arr = data.articles;
            showNews(arr, searchList)
        } catch (error) {
            console.log(error);
        }
    }  
    searchNews()
})