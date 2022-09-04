const loadCategories = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
}
const displayCategories = (categories) =>{
    const newsCategory = document.getElementById('category-items');
    categories.forEach((category) => {
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML =`
        <a  onclick="loadNews()" href = '#'>${category.category_name}</a>
        `;
        newsCategory.appendChild(newsDiv);
    });
}

const loadNews = async() =>{
    const url = (`https://openapi.programming-hero.com/api/news/category/01`)
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data[0])
} 

const displayNews = (news) =>{
    console.log(news);
    const allNews = document.getElementById('all-news');
    const allNewsDiv = document.createElement('div');
    allNewsDiv.innerHTML =`
    <div class="flex card lg:card-side bg-base-full shadow-xl gap-10">
                <figure><img src="${news.image_url}" alt="Album"></figure>
                <div class="card-body">
                    <h2 class="card-title text-3xl gap-2">${news.title}</h2>
                    <p>${news.details}</p>
                    <!-- --- -->
                    <div class="flex justify-around">
                        <div class="flex gap-5 content-center">
                            <div class="dropdown dropdown-end">
                                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                    <div class="w-10 rounded-full">
                                        <img src="${news.author.img}"/>
                                    </div>
                                </label>
                            </div>
                            <div class="form-control">
                                <h5 class="text-xl">Name: ${news.author.name}</h5>
                                <p>${news.author.published_date}</p>
                            </div>
                        </div>
                        <!-- ---  -->
                        <div class="justify-center">
                            <h5 class="2xl">${news.rating.badge}</h5>
                            <p class="text-center">${news.rating.number}</p>
                        </div>
                    </div>
                </div>
            </div>
    `;
    allNews.appendChild(allNewsDiv)

}
loadNews()

loadCategories();