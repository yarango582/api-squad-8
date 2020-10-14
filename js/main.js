
function getQuestionsNumbers(){
    let questionsQuantity = document.getElementById('questions-number').value;
    (questionsQuantity === '') ? questionsQuantity = 5: 'nada por aca';
    return questionsQuantity;
}

function getQuestions() {
    let numberQuestions = getQuestionsNumbers();
    const questionsCategory = document.getElementById('category').value
    const questionsDificulty = document.getElementById('difficulty').value
    const questionsType = document.getElementById('type').value
    switch(true) {
        case (questionsCategory === 'all' && questionsDificulty === 'all' && questionsType === 'all'):
            conditionalQuestion = fetch(`https://opentdb.com/api.php?amount=${numberQuestions}`)
                .then(response => response.json())
                .then(data => printCardsQuestions(data.results))
            break
        case (questionsCategory === 'all' && questionsDificulty === 'all'):
            conditionalQuestion = fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&type=${questionsType}`)
                .then(response => response.json())
                .then(data => printCardsQuestions(data.results))
            break
        case (questionsCategory === 'all' && questionsType === 'all'):
            conditionalQuestion = fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&difficulty=${questionsDificulty}`)
                .then(response => response.json())
                .then(data => printCardsQuestions(data.results))
            break
        case (questionsDificulty === 'all' && questionsType === 'all'):
            conditionalQuestion = fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=${questionsCategory}`)
                .then(response => response.json())
                .then(data => printCardsQuestions(data.results))
            break
        case (questionsCategory === 'all'):
            conditionalQuestion = fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&difficulty=${questionsDificulty}&type=${questionsType}`)
                .then(response => response.json())
                .then(data => printCardsQuestions(data.results))
            break
        case (questionsDificulty === 'all'):
            conditionalQuestion = fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=${questionsCategory}&type=${questionsType}`)
                .then(response => response.json())
                .then(data => printCardsQuestions(data.results))
            break
        case (questionsType === 'all'):
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

function printCardsQuestions(questions) {
	const container = document.getElementById("container");
	container.innerHTML = "";
	questions.forEach((question) => {
		const card = returnCard(question);
		container.innerHTML += card;
	});
}

function returnCard(x) {
	const card = `<div class="card mb-5">
                    <div class="card-body">
                    <h4 class="card-title">${x.category}</h4>
                    <h5 class="card-subtitle mb-2 text-muted">${x.question}</h5>
                        ${returnAnswersHTML(
													x.correct_answer,
													x.incorrect_answers
												)}           
                    </div>
                </div>`;
	return card;
}

function returnAnswersHTML(correct, incorrects) {
	const correctHTML = `<div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                            <label class="form-check-label" for="exampleRadios1">
                            ${correct}
                            </label>
                        </div>`;

	let incorrectHTML = "";
	incorrects.forEach((incorrect) => {
		incorrectHTML += `<div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                            <label class="form-check-label" for="exampleRadios1">
                            ${incorrect}
                            </label>
                        </div>`;
	});

	return correctHTML + incorrectHTML;
}
