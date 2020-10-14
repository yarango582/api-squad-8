function getQuestions() {
	//const questionsQuantity = document.getElementById("questions-number").value;
	fetch(`https://opentdb.com/api.php?amount=10`)
		.then((response) => response.json())
		.then((data) => printC(data.results));
}
function printC(questions) {
	const container = document.getElementById("container");
	container.innerHTML = "";
	questions.forEach((question, index) => {
		question.id = index;
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

function returnAnswersHTML(correct, incorrects, ids) {
	incorrects.push(correct);
	let incorrectHTML = "";
	incorrects.forEach((incorrect, index) => {
		incorrectHTML += `<div class="form-check">
                            <input class="form-check-input" type="radio" name="${ids}" id="${ids}--${index}" value="${incorrect}" checked>
                            <label class="form-check-label" for="${ids}--${index}">
                            ${incorrect}
                            </label>
                        </div>`;
	});

	return incorrectHTML;
}
function idDinamic() {}
