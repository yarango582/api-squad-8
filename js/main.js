x
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
function printC(questions) {
	const container = document.getElementById("container");
	container.innerHTML = "";
	questions.forEach((question,index) => {
        question.id=index;
		const card = returnCard(question);
		container.innerHTML += card;
	});
}

function returnCard(x) {
	const card = `<div class="card">
                    <div class="card-body">
                    <h4 class="card-title">${x.category}</h4>
                    <h5 class="card-subtitle mb-2 text-muted">${x.question}</h5>
                        ${returnAnswersHTML(
													x.correct_answer,
													x.incorrect_answers,
													x.id
												)}           
                    </div>
                </div>`;
	return card;
}

function returnAnswersHTML(correct, incorrects,ids) {
    incorrects.push(correct)
	let incorrectHTML = "";
	incorrects.forEach((incorrect,index) => {
		incorrectHTML += `<div class="form-check">
                            <input class="form-check-input" type="radio" name="${ids}" id="${ids}--${index}" value="${incorrect}" checked>
                            <label class="form-check-label" for="of${index}">
                            ${incorrect}
                            </label>
                        </div>`;
	});

	return incorrectHTML;
}
