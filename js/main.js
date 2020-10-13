
function getQuestionsNumbers(){
    let questionsQuantity = document.getElementById('questions-number').value;
    (questionsQuantity === '') ? questionsQuantity = 5: 'nada por aca';
    return questionsQuantity;
}

function getQuestions() {
    let numberQuestions = getQuestionsNumbers();
    const questionsCategory = document.getElementById('questions-category').value
    const questionsDificulty = document.getElementById('questions-dificulty').value
    const questionsType = document.getElementById('questions-type').value
    switch(true) {
        case (questionsCategory === 'false' && questionsDificulty === 'false' && questionsType === 'false'):
            conditionalQuestion = fetch(`https://opentdb.com/api.php?amount=${numberQuestions}`)
                .then(response => response.json())
                .then(data => printCardsQuestions(data.results))
            break
        case (questionsCategory === 'false' && questionsDificulty === 'false'):
            conditionalQuestion = fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&type=${questionsType}`)
                .then(response => response.json())
                .then(data => printCardsQuestions(data.results))
            break
        case (questionsCategory === 'false' && questionsType === 'false'):
            conditionalQuestion = fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&difficulty=${questionsDificulty}`)
                .then(response => response.json())
                .then(data => printCardsQuestions(data.results))
            break
        case (questionsDificulty === 'false' && questionsType === 'false'):
            conditionalQuestion = fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=${questionsCategory}`)
                .then(response => response.json())
                .then(data => printCardsQuestions(data.results))
            break
        case (questionsCategory === 'false'):
            conditionalQuestion = fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&difficulty=${questionsDificulty}&type=${questionsType}`)
                .then(response => response.json())
                .then(data => printCardsQuestions(data.results))
            break
        case (questionsDificulty === 'false'):
            conditionalQuestion = fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=${questionsCategory}&type=${questionsType}`)
                .then(response => response.json())
                .then(data => printCardsQuestions(data.results))
            break
        case (questionsType === 'false'):
            conditionalQuestion = fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=${questionsCategory}&difficulty=${questionsDificulty}`)
                .then(response => response.json())
                .then(data => printCardsQuestions(data.results))
            break
        default:
            conditionalQuestion = fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=${questionsCategory}&difficulty=${questionsDificulty}&type=${questionsType}`)
                .then(response => response.json())
                .then(data => printCardsQuestions(data.results))
    }
}

function getCategory() {

    fetch(`https://opentdb.com/api_category.php`)
        .then(response => response.json())
        .then(data => listCategory(data.trivia_categories))
    
}

function listCategory(category){

    let formCategory = document.getElementById('category');
    formCategory.innerHTML = '';
    formCategory.innerHTML = `<option value="all">Todas las Categorias</option>`
    category.forEach((question) => {
        let row = `<option value="${question.id}">${question.name}</option>`;
        formCategory.innerHTML += row;
    });

}

getCategory()