const loadCategories = async() =>{
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
}
const displayCategories = (categories) =>{
    const newsCategory = document.getElementById('category-items');
    categories.forEach((category) => {
        const createList = document.createElement('div');
        createList.innerHTML =`
        <a onclick="loadNews()" href = '#'>${category.category_name}</a>
        `;
        newsCategory.appendChild(createList);
    });
}

const loadNews = async() =>{
    const res = await fetch(url);
    const data = await res.json();
    
} 

loadCategories();