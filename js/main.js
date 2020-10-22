import Category from './category.js'
import Questions from './questions.js'
import Results from './results.js'

const questions = new Questions
const category = new Category
category.getCategory()

document.getElementById("get-questions").addEventListener('submit', (event) =>{
	event.preventDefault()
	
	questions.getQuestions()
	// setTimeout(() => {
	// 	console.log(questions.getQuestionsForResult)
	// },2000) 
		
	
})

document.getElementById("button-results").addEventListener('click', () =>{
	const results = new Results
	results.imprimeResultado(questions.getQuestionsForResult)
})

