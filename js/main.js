function getQuestions() {
	const questionsQuantity = document.getElementById("questions-number").value;
	fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}`)
		.then((response) => response.json())
		.then((data) => printC(data.results));
}
function printC(questions) {
	const container = document.getElementById("container");
	container.innerHTML = "";
	questions.forEach((question) => {
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
