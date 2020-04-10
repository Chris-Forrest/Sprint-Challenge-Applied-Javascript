// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')

//make elements
function cardMaker(data){
const cardEl = document.createElement('div')
const headLine = document.createElement('div')
const divAuthor = document.createElement('div')
const imgCntnr = document.createElement('div')
const image = document.createElement('img')
const authorName = document.createElement('span')

//nesting
cardEl.appendChild(headLine)
cardEl.appendChild(divAuthor)
divAuthor.appendChild(imgCntnr)
divAuthor.appendChild(image)
cardEl.appendChild(authorName)

cardEl.classList.add('card')
headLine.classList.add('headline')
divAuthor.classList.add('author')
imgCntnr.classList.add('img-container')

headLine.textContent = `headline: ${data.headLine}`
image.src = 
authorName.textContent = `authorName: ${data.authorName}`

return cardEl

}