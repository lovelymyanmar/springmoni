function articles(blog) {
    let url_en = 'https://script.google.com/macros/s/AKfycbzDjBFkxbdNGrrPzGGHm4FJVze3Dtguc9znwt0p7q7VofLAVNL7WLYo01LeptY9tR7Oag/exec?blog='+blog;

    fetch(url_en)
    .then((response)=>response.json())
    .then((items)=>{
        document.querySelector('#articles').innerHTML = '';
        items.forEach(elm => {
            document.querySelector('#articles').innerHTML += '<article id="'+elm.id+'" class="articles-item">'
            +'<div class="preview">'
            +'<a href="article.html?id='+elm.id+'" class="article-url">'
            +'<img class="article-preview" src="'+elm.ogimg+'"/></div>'
            +'</a>'
            +'<div class="article-detail">'
            +'<a href="article.html?id='+elm.id+'" class="article-url">'
            +'<p class="article-title">'+elm.title+'</p>'
            +'</a>'
            +'<a href="article.html?id='+elm.id+'" class="article-url">'
            +'<p id="article-info" class="article-info">Published on '+elm.pub+' in '+elm.cat+'</p></a></div>'
            //+'<p class="exerpt">'+elm.exerpt+'</p>'
            +'</article>';
        })
    })
}

export {articles}
