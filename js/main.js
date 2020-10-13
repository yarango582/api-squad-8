
function getQuestionsNumbers(){

    let questionsQuantity = document.getElementById('questions-number').value;

    (questionsQuantity === '') ? questionsQuantity = 5: 'nada por aca';

    return questionsQuantity;
}

function getQuestions() {
    let numberQuestions = getQuestionsNumbers();
    fetch(`https://opentdb.com/api.php?amount=50`)
        .then(response => response.json())
        .then(data => getCategory(data.results))
        .then(data => getdifficulty(data.results))
}

function getCategory(questions){

    let category = document.getElementById('category');
    category.innerHTML = '';

    questions.forEach((question, index) => {
        let row = `<option value="${index}">${question['category']}</option>`;
            category.innerHTML += row;
    });

}

function getdifficulty(questions){

    let difficulty = document.getElementById('difficulty');
    difficulty.innerHTML = '';

    questions.forEach((question, index) => {
        let row = `<option value="${index}">${question['difficulty']}</option>`;
        difficulty.innerHTML += row;
    });

}


getQuestions();
getdifficulty();