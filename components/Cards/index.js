// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
    console.log(response.data.articles);
    const articlesTopics = Object.entries(response.data.articles)
    for (let i = 0; i < articlesTopics.length; i++) {
       articlesTopics[i][1].forEach((data) => {
            const newArticle = article(data);
            cardsContainer.appendChild(newArticle);
       })
    }
})
.catch(err => console.log("Error:", err));

const article = (data) => {
    const article = document.createElement('div');
    const articleHeadline = document.createElement('div');
    const articleAuthor = document.createElement('div');
    const articleImgContainer = document.createElement('div');
    const articleImg = document.createElement('img');
    const articleImgCaption = document.createElement('span');

    article.classList.add('card');
    articleHeadline.classList.add('headline');
    articleAuthor.classList.add('author');
    articleImgContainer.classList.add('img-container');

    articleHeadline.textContent = data.headline;
    articleImg.setAttribute('src', data.authorPhoto);
    articleImgCaption.textContent = data.authorName;

    article.appendChild(articleHeadline);
    article.appendChild(articleAuthor);

    articleAuthor.appendChild(articleImgContainer);
    articleImgContainer.appendChild(articleImg);
    articleAuthor.appendChild(articleImgCaption);

    return article;
}


