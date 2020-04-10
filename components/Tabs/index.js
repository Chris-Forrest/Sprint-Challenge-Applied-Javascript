// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


const getTopic = () =>{
    topics.forEach ( item => 
        axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
        .then(
            whatIGet => {
              console.log(whatIGet)  //topics[item]
            }
        ))
       .catch(
           errorMessage => {
               console.log(errorMessage)
           }
       ) 
}
console.log(getTopic())
/*axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(
    whatIGet => {
        console.log(whatIGet)
    }
)
.catch(
    errorMessage => {
        console.log(errorMessage)
    }
)*/

function tabMaker(){
    const tabEl = document.createElement('div')
    tabEl.classList.add('tab')

}

const tabsEl = document.querySelector('.topics')

