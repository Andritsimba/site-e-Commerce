fetch("assiets/data/articles.json")
.then(response => response.json())
.then(articles => {
    const productList = document.querySelector(".product-list");
    articles.forEach(article => {
        const articleItem = document.createElement("div");
        articleItem.className ="product-item";
        
        const articleImage = document.createElement("img");
        articleImage.className = "product-image";
        articleImage.src = article.image;
        articleImage.alt = article.title;

        const articleContentImg = document.createElement("div");
        articleContentImg.className = "product-content-img";
        articleContentImg.appendChild(articleImage);

        const articleContent = document.createElement("div");    
        articleContent.className = "product-content";
        
        const articleTitle = document.createElement("h3");
        articleTitle.className = "product-title";
        articleTitle.textContent = article.title;

        const articleDescription = document.createElement("p");
        articleDescription.className = "product-description";   
        articleDescription.textContent = article.description;

        articleContent.append(articleTitle, articleDescription);
        articleItem.append(articleContentImg, articleContent);
        productList.appendChild(articleItem);
    });
});