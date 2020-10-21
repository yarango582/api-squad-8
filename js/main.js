<<<<<<< HEAD
let contadorButton = 0;
let arrayCorrects = [];
=======
let getQuestionsForResult = '';
>>>>>>> 6fb961b1d657da1a53d1bedc8e48a936c8725221

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
	getQuestionsForResult = questions
	const container = document.getElementById("container");
	container.innerHTML = "";
	questions.forEach((question, index) => {
		question.id = index;
		const card = returnCard(question);
		container.innerHTML += card;
	});
	const button = document.getElementById("button");
	button.innerHTML = `<button onclick="imprimeResultado('s')" class="btn btn-primary button">enviar</button>`;
	// button.innerHTML = `<button onclick="imprimeResultado(${questions})" class="btn btn-primary button">enviar</button>`;
}
function returnCard(x) {
	const card = `<div class="card mb-5">
                    <div class="card-body">
                    <h4 class="card-title">${x.category}</h4>
                    <h5 class="card-subtitle mb-2 text-muted">${x.question}</h5>
                    <form name="formulario" id="answer ${x.id}" action="" method="POST">
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
	arrayCorrects.push(correct);
	let incorrectHTML = "";
	for (i = 0; i < incorrects.length; i++) {
		let al = Math.floor(Math.random() * incorrects.length);
		if(i === 0) {
			incorrectHTML += `<div class="form-check">
								<input class="form-check-input" type="radio" name="answer ${ids}" id="${ids}-${i}" value="${incorrects[i]}" checked>
								<label class="form-check-label" for="${ids}-${i}">
								${incorrects[i]}
								</label>
							</div>`;
		} else {
		incorrectHTML += `<div class="form-check">
								<input class="form-check-input" type="radio" name="answer ${ids}" id="${ids}-${i}" value="${incorrects[i]}">
								<label class="form-check-label" for="${ids}-${i}">
								${incorrects[i]}
								</label>
							</div>`;
		}
		
	}
	return incorrectHTML;
}

function imprimeresultado(x) {
	
	


	// const elementClass = document.getElementsByClassName("form-check-input");
	// console.log(elementClass)
	

	// console.log(y);
function imprimeResultado(question) {
	// console.log(question)
	let answerCorrect = 0
	let answerIncorrect = 0
	// const getResult = question.filter((q) => question.correct_answer === question)

	// lo que esté dentro del for se ejecuta 10 veces
	for(let i = 0; i < getQuestionsForResult.length; i++) {
		const getLengthIncorrect = getQuestionsForResult[i].incorrect_answers
		// let xcvb = document.getElementsByName(`answer ${i}`)
		// console.log(xcvb[i].checked)
		// console.log(xcvb[i].value)
		// for(let j = 0; j < getLengthIncorrect.length; j++) {
		// 	let getValueQuestions = document.getElementById(`${i}-${j}`)
		// 	console.log(getValueQuestions);
		// 	// console.log(getValueQuestions.value)
		// 	// console.log(getValueQuestions.checked)
		// }
		let options = document.getElementsByName(`answer ${i}`)
		options.forEach(option => {
			if(option.checked) {
				console.log(option.value)
			}
		})

		// console.log(getValueQuestions);
		// if(getValueQuestions[i].checked) {
		// 	alert('Logrado')
		// }
		// if(getValueQuestions === getQuestionsForResult[i].correct_answer) {
		// 	answerCorrect += 1
		// } else {
		// 	answerIncorrect += 1
		// }



		// console.log(getQuestionsForResult[i].correct_answer)
		// console.log(getValueQuestions[i].value)
	}
	// console.log(answerIncorrect, answerCorrect)

    // for (let w = 0; w < x; w++) {       
    //     let memo=document.getElementsByName(w);
    //     for (let i = 0; i < memo.length; i++) {
    //         if (memo[i].checked) {
    //             //if (memo[i].value === x.correct_answer) {
    //             //    
    //             //}
    //             console.log ( memo[i].value)
    //             console.log(y)
    //             console.log ( memo[i])
    //         }
    // }
    // }
}




getCategory()
