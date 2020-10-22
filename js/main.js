function getQuestionsNumbers() {
	let questionsQuantity = document.getElementById("questions-number").value;
	questionsQuantity === "" ? (questionsQuantity = 5) : "nada por aca";
	return questionsQuantity;
}

function getQuestions() {
	let numberQuestions = getQuestionsNumbers();
	const questionsCategory = document.getElementById("category").value;
	const questionsDificulty = document.getElementById("difficulty").value;
	const questionsType = document.getElementById("type").value;
	switch (true) {
		case questionsCategory === "all" &&
			questionsDificulty === "all" &&
			questionsType === "all":
			conditionalQuestion = fetch(
				`https://opentdb.com/api.php?amount=${numberQuestions}`
			)
				.then((response) => response.json())
				.then((data) => printCardsQuestions(data.results));
			break;
		case questionsCategory === "all" && questionsDificulty === "all":
			conditionalQuestion = fetch(
				`https://opentdb.com/api.php?amount=${numberQuestions}&type=${questionsType}`
			)
				.then((response) => response.json())
				.then((data) => printCardsQuestions(data.results));
			break;
		case questionsCategory === "all" && questionsType === "all":
			conditionalQuestion = fetch(
				`https://opentdb.com/api.php?amount=${numberQuestions}&difficulty=${questionsDificulty}`
			)
				.then((response) => response.json())
				.then((data) => printCardsQuestions(data.results));
			break;
		case questionsDificulty === "all" && questionsType === "all":
			conditionalQuestion = fetch(
				`https://opentdb.com/api.php?amount=${numberQuestions}&category=${questionsCategory}`
			)
				.then((response) => response.json())
				.then((data) => printCardsQuestions(data.results));
			break;
		case questionsCategory === "all":
			conditionalQuestion = fetch(
				`https://opentdb.com/api.php?amount=${numberQuestions}&difficulty=${questionsDificulty}&type=${questionsType}`
			)
				.then((response) => response.json())
				.then((data) => printCardsQuestions(data.results));
			break;
		case questionsDificulty === "all":
			conditionalQuestion = fetch(
				`https://opentdb.com/api.php?amount=${numberQuestions}&category=${questionsCategory}&type=${questionsType}`
			)
				.then((response) => response.json())
				.then((data) => printCardsQuestions(data.results));
			break;
		case questionsType === "all":
			conditionalQuestion = fetch(
				`https://opentdb.com/api.php?amount=${numberQuestions}&category=${questionsCategory}&difficulty=${questionsDificulty}`
			)
				.then((response) => response.json())
				.then((data) => printCardsQuestions(data.results));
			break;
		default:
			conditionalQuestion = fetch(
				`https://opentdb.com/api.php?amount=${numberQuestions}&category=${questionsCategory}&difficulty=${questionsDificulty}&type=${questionsType}`
			)
				.then((response) => response.json())
				.then((data) => printCardsQuestions(data.results));
	}
}

function getCategory() {
	fetch(`https://opentdb.com/api_category.php`)
		.then((response) => response.json())
		.then((data) => listCategory(data.trivia_categories));
}

function listCategory(category) {
	let formCategory = document.getElementById("category");
	formCategory.innerHTML = "";
	formCategory.innerHTML = `<option value="all">Todas las Categorias</option>`;
	category.forEach((question) => {
		let row = `<option value="${question.id}">${question.name}</option>`;
		formCategory.innerHTML += row;
	});
}


function printCardsQuestions(questions) {
	const container = document.getElementById("container");
	container.innerHTML = "";
	questions.forEach((question, index) => {
		question.id = index;
		const card = returnCard(question);
		container.innerHTML += card;
    });
    const button = document.getElementById("button");
    
}
function returnCard(x) {
	const card = `<div class="card mb-5">
                    <div class="card-body">
                    <h4 class="card-title">${x.category}</h4>
                    <h5 class="card-subtitle mb-2 text-muted">${x.question}</h5>
                    <form name="formulario" id="${x.id}" action="" method="POST">
                    ${returnAnswersHTML(
                                    x.correct_answer,
                                    x.incorrect_answers,
                                    x.id
                                )}
                        </form>   
                    </div>
                </div>`;
	return card;
}


function returnAnswersHTML(correct, incorrects, ids) {
	incorrects.push(correct);
	let incorrectHTML = "";
	for (i = 0; i < incorrects.length; i++) {
		let al = Math.floor(Math.random() * incorrects.length);
	incorrectHTML += `<div class="form-check">
    <input class="form-check-input" type="radio" name="${ids}" id="${ids}-${i}" value="${incorrects[i]}">
    <label class="form-check-label" for="${ids}-${i}">
    ${incorrects[i]}
    </label>
    </div>`;
		
	}
	return incorrectHTML;
}
function printResult() {
	let answerCorrect = 0
	let answerIncorrect = 0
	let checking = 0
	const questions = new Questions
	console.log(questions['getQuestionsForResult'])
	questions.getQuestionsForResult.forEach((question) => {
		let optionChecked = ''
		let options = document.getElementsByName(`answer ${question.id}`)
		options.forEach(option => {
			if(option.checked) {
				optionChecked = option.value
				console.log(optionChecked)
			}
		})
		if(optionChecked === question.correct_answer) {
			answerCorrect++
		} else if(!optionChecked) {
			checking++
		} else 
			answerIncorrect++
	})

	if(checking > 0) {
		alert('Te faltan preguntas por responder')
	} else 
		alert(`Tienes ${answerCorrect} correctas y ${answerIncorrect} incorrectas`)
	
}




getCategory()
