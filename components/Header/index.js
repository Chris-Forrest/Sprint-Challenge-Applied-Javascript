// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function HeaderMaker() {
   /*****************************create header elements **********************/ 
    
    const header = document.createElement('div')
    const dateEl = document.createElement('span')
    const h1 = document.createElement('h1')
    const temp = document.createElement('span')

/******************************* nest elements *****************************/

header.appendChild(dateEl)
header.appendChild(h1)
header.appendChild(temp)


/*************** add classes ******************************************/

    header.classList.add('header')
    dateEl.classList.add('date')
    temp.classList.add('temp')



/************************ add text content *********************/

    dateEl.textContent = 'SMARCH 28, 2019'
    h1.textContent = 'Lambda Times'
    temp.textContent = '98°'


return header;

}

const headerDiv = document.querySelector('.header-container');
const header = HeaderMaker();
headerDiv.appendChild(header);

