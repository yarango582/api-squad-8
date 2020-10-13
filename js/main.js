
function getQuestionsNumbers(){

    let questionsQuantity = document.getElementById('questions-number').value;

    (questionsQuantity === '') ? questionsQuantity = 5: 'nada por aca';

    return questionsQuantity;
}

// function getQuestions() {
//     let numberQuestions = getQuestionsNumbers();
//     fetch(`https://opentdb.com/api.php?amount=${numberQuestions}`)
//         .then(response => response.json())
//         .then(data => printCard(data.results))
// }

function getCategory() {

    fetch(`https://opentdb.com/api_category.php`)
        .then(response => response.json())
        .then(data => listCategory(data.trivia_categories))
    
}

function listCategory(category){

    let formCategory = document.getElementById('category');
    formCategory.innerHTML = '';

    category.forEach((question) => {
        let row = `<option value="${question.id}">${question.name}</option>`;
        formCategory.innerHTML += row;
    });

}

getCategory();