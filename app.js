const articles = document.querySelectorAll(".question");
articles.forEach(function(article){
    const btns = article.querySelectorAll(".btn");
    btns.forEach(function(btn){
        btn.addEventListener("click", function(){
            articles.forEach(function(item){
                if(item !== article){
                    item.classList.remove("show");
                }
            });
            article.classList.toggle("show");
        });
        
    });
});




