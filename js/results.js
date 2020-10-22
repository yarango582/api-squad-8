export default class Results {
    imprimeResultado(questions) {
        let answerCorrect = 0
        let answerIncorrect = 0
        let score = 0
        console.log(questions)
        questions.forEach((question) => {
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
            } else 
                answerIncorrect++
        })
        score = ((100 / questions.length) * answerCorrect)
    
        alert(`Sacaste un puntaje de ${score.toFixed(2)}/100`)
        
    }
}